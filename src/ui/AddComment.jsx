import { useEffect, useState } from "react";
import { MessageCircle, XCircle } from "react-feather";
import { useAddComment } from "../hooks/useAddComment";
import LoadingSpinner from "../features/loading/LoadingSpinner";

export default function AddComment() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const { addComment, isAddingComment } = useAddComment();

  useEffect(() => {
    if (!isAddingComment) {
      setIsOpen(false);
    }
  }, [isAddingComment]);

  function toggleWindow() {
    setIsOpen((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !comment) return; // Prevent submission if fields are empty

    const newComment = {
      name,
      comment,
      date: new Date().toLocaleDateString("en-GB"), // Corrected date
    };

    addComment(newComment);
    setName(""); // Clear input after submission
    setComment("");
  }

  return (
    <>
      <button
        onClick={toggleWindow}
        className="group text-start py-2 px-4 border flex items-center justify-center gap-4 border-white hover:border-[#3274c7] rounded-full text-white  hover:text-[#3274c7] bg-[#091422] w-fit text-xs my-4 hover:scale-[1.02] transition-all duration-400 ease-out"
      >
        <MessageCircle />
        <p className="block opacity-100 md:hidden md:opacity-0 md:group-hover:opacity-100 md:group-hover:block transition-opacity duration-300">
          Leave a comment
        </p>
      </button>

      {isOpen && (
        <>
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-black opacity-40 backdrop-blur-lg z-[1000000]" />

          {/* Comment Modal */}
          <div className="fixed inset-0 flex z-[2000000] justify-center p-4">
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col items-center justify-center gap-4 top-12 sm:top-20 w-full sm:max-w-80 mx-auto h-fit p-4 sm:p-8 text-[#3274c7] rounded-lg border border-[#3274c7] bg-[#091422]"
            >
              {/* Header */}
              <div className="flex w-full items-center justify-between text-slate-200">
                <h2 className="text-lg font-medium tracking-tight sm:text-xl">
                  Add Comment
                </h2>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="hover:scale-[1.02] transition-all duration-400 ease-out"
                >
                  <XCircle />
                </button>
              </div>

              {/* Input Fields */}
              <div className="flex flex-col items-center justify-center gap-2 w-full">
                <div className="flex w-full flex-col items-start justify-center gap-2">
                  <label htmlFor="name"> Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g Saleh Kamal"
                    className="w-full px-3 py-2 border rounded bg-[#0b1724] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3274c7]"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-2">
                  <label htmlFor="comment"> Comment</label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="e.g What a wonderful portfolio!"
                    className="w-full h-24 px-3 py-2 border rounded bg-[#0b1724] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3274c7]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isAddingComment}
                className="text-start py-2 w-full px-4 border flex items-center justify-center gap-4 border-[#3d8c53] rounded-full text-[#3d8c53] bg-[#0a170d] text-sm  hover:scale-[1.02] transition-all duration-400 ease-out disabled:opacity-50"
              >
                {isAddingComment ? <LoadingSpinner /> : "Submit"}
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
