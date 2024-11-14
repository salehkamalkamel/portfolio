import LoadingSpinner from "./LoadingSpinner";

export default function LoadingPage({ message }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <LoadingSpinner />
        {message && <p className="text-sm font-medium">{message}</p>}
      </div>
    </div>
  );
}
