export default function Button({ children, className, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={` justify-center flex items-center rounded-full bg-teal-400/20 px-8 py-4 text-lg font-medium leading-5 text-teal-300 hover:opacity-75 cursor-pointer transition-all ${className}`}
    >
      {children}
    </button>
  );
}
