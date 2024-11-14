const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-2 border bg-slate-800/60 border-slate-200/10  text-gray-800 rounded-md shadow-sm outline-none  transition-all duration-200 ease-in-out`}
      />
      {error && (
        <p className="text-red-500 text-sm font-medium py-2">
          {error?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
