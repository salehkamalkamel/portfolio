export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-8 h-8 border-4 border-t-transparent border-blue-300 rounded-full animate-spin"></div>
    </div>
  );
}
