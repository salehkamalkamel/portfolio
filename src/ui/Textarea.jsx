export default function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <label className="flex flex-col w-full gap-2">
      <span>{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`outline-none px-4 py-2 border ${
          error ? "border-red-500" : "border-slate-500"
        } text-slate-300 bg-slate-800 rounded-md`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </label>
  );
}
