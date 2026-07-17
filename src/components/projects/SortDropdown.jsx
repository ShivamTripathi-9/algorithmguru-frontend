const options = [
  "Newest",
  "Most Popular",
  "Beginner First",
  "Advanced First",
  "Shortest Duration",
];

export default function SortDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-[#16223A]/10 bg-white px-4 py-3 text-[#16223A] outline-none focus:border-[#119DA4]"
    >
      {options.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
}