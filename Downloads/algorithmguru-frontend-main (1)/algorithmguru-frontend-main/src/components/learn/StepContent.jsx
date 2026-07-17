// Formats a plain-text step description into readable sections — no
// markdown dependency. Works with ALL-CAPS section headers (GOAL, CONCEPT,
// etc), bullets, numbered lists, code lines, and prose. If a description
// has no recognizable structure it just renders as prose.

const SECTION_HEADER = /^[A-Z0-9][A-Z0-9 —\-]*$/;

function splitSections(text) {
  const lines = text.split("\n");
  const sections = [];
  let current = null;

  for (const line of lines) {
    const trimmed = line.trim();
    
    // 1. Purana logic: Checks for strict ALL-CAPS (e.g., "GOAL")
    const isAllCapsHeader =
      trimmed.length > 0 &&
      trimmed.length < 60 &&
      SECTION_HEADER.test(trimmed) &&
      !/[a-z]/.test(trimmed);

    // 2. Naya logic: Checks for Markdown H3 (e.g., "### Goal")
    const markdownHeaderMatch = trimmed.match(/^###\s+(.+)$/);

    if (isAllCapsHeader || markdownHeaderMatch) {
      // Agar markdown mila, toh '###' hata kar usko uppercase me convert kar do
      const title = markdownHeaderMatch ? markdownHeaderMatch[1].toUpperCase() : trimmed;
      current = { title: title, lines: [] };
      sections.push(current);
    } else if (current) {
      current.lines.push(line);
    } else {
      current = { title: null, lines: [line] };
      sections.push(current);
    }
  }

  return sections
    .map((s) => ({ title: s.title, body: s.lines.join("\n").trim() }))
    .filter((s) => s.body.length > 0);
}
function formatInline(text) {
  // Pehle backticks (`) ke basis par split karo
  const codeParts = text.split(/`([^`]+)`/g);

  return codeParts.map((part, i) => {
    if (i % 2 === 1) {
      // Ye part backticks ke andar tha
      return (
        <code
          key={i}
          className="bg-[#16223A]/[0.06] dark:bg-white/[0.1] px-1.5 py-0.5 rounded-md text-[13px] font-mono text-[#16223A] dark:text-white/90"
        >
          {part}
        </code>
      );
    } else {
      // Ye normal text hai, isme bold (**) check karo
      const boldParts = part.split(/\*\*([^*]+)\*\*/g);
      return boldParts.map((bPart, j) => {
        if (j % 2 === 1) {
          // Ye part ** ke andar tha
          return (
            <strong key={`${i}-${j}`} className="font-semibold text-[#16223A] dark:text-white">
              {bPart}
            </strong>
          );
        }
        return <span key={`${i}-${j}`}>{bPart}</span>;
      });
    }
  });
}
function classifyLine(rawLine) {
  const line = rawLine.trim();
  if (/^-\s/.test(line)) return "bullet";
  if (/^\d+\.\s/.test(line)) return "numbered";
  if (/^\s{2,}/.test(rawLine)) return "code";
  if (
    /^(import|from|def|class|for|with|print\(|return|if |elif |else:|while |try:|except|@)/.test(
      line
    )
  )
    return "code";
  if (/^#/.test(line)) return "code";
  if (/^[a-zA-Z_][\w.]*(\[[^\]]*\])?\s*[+\-*/]?=[^=]/.test(line)) return "code";
  if (/\w+\([^)]*\)/.test(line)) return "code";
  if (/:\s*(#.*)?$/.test(line) && line.length > 1) return "code";
  return "text";
}

function buildBlocks(bodyText) {
  const lines = bodyText.split("\n");
  const tags = lines.map((l) => (l.trim() === "" ? "blank" : classifyLine(l)));

  const blocks = [];
  let i = 0;

  const nextNonBlankTag = (from) => {
    for (let k = from; k < tags.length; k++) {
      if (tags[k] !== "blank") return tags[k];
    }
    return null;
  };

  while (i < lines.length) {
    if (tags[i] === "blank") {
      i++;
      continue;
    }

    const blockType = tags[i];
    const start = i;

    while (i < lines.length) {
      if (tags[i] === blockType) {
        i++;
        continue;
      }
      if (tags[i] === "blank" && nextNonBlankTag(i + 1) === blockType) {
        i++;
        continue;
      }
      break;
    }

    const rawSlice = lines.slice(start, i);
    const content =
      blockType === "code"
        ? rawSlice.join("\n").replace(/\n+$/, "")
        : rawSlice
            .filter((l) => l.trim() !== "")
            .join("\n")
            .trim();

    if (content) blocks.push({ type: blockType, content });
  }

  return blocks;
}

function Block({ type, content }) {
  if (type === "code") {
    return (
      <pre className="mb-3 rounded-lg overflow-x-auto bg-[#16223A]/[0.06] dark:bg-white/[0.06] p-3 text-[#16223A] dark:text-white/90 text-[13px] font-mono leading-relaxed">
        {content}
      </pre>
    );
  }

  if (type === "bullet") {
    return (
      <ul className="list-disc pl-5 space-y-1.5 mb-3 text-[#5B6E8C] dark:text-white/70 text-sm leading-relaxed">
        {content.split("\n").map((l, i) => (
          <li key={i}>{formatInline(l.trim().replace(/^-\s/, ""))}</li>
        ))}
      </ul>
    );
  }

  if (type === "numbered") {
    return (
      <ol className="list-decimal pl-5 space-y-1.5 mb-3 text-[#5B6E8C] dark:text-white/70 text-sm leading-relaxed">
        {content.split("\n").map((l, i) => (
          <li key={i}>{formatInline(l.trim().replace(/^\d+\.\s/, ""))}</li>
        ))}
      </ol>
    );
  }

  return (
    <p className="text-[#5B6E8C] dark:text-white/70 text-sm leading-relaxed mb-3 whitespace-pre-line">
      {formatInline(content)}
    </p>
  );
}

export default function StepContent({ content, accent }) {
  const sections = splitSections(content ?? "");

  return (
    <div>
      {sections.map((section, i) => {
        const blocks = buildBlocks(section.body);
        return (
          <div key={i}>
            {section.title && (
              <h3
                className="text-xs font-semibold uppercase tracking-wide mt-6 mb-2 first:mt-0"
                style={{ color: accent }}
              >
                {section.title}
              </h3>
            )}
            {blocks.map((block, j) => (
              <Block key={j} type={block.type} content={block.content} />
            ))}
          </div>
        );
      })}
    </div>
  );
}