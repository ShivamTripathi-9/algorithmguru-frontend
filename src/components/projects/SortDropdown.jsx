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
      className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500"
    >
      {options.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
}
