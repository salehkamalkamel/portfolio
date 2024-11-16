// import { FcGoogle } from "react-icons/fc";
import { useLoginWithGoogle } from "../hooks/useLoginWithGoogle";
import LoadingSpinner from "../features/loading/LoadingSpinner";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

export default function Login() {
  const {
    // loginWithGoogle,
    // isLoggingWithGoogle,
    error: googleError,
  } = useLoginWithGoogle();

  const { login, isLogging, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  function handleLogin(e) {
    e.preventDefault();

    // Validate email and password
    const emailErr = emailErrorHandler(email);
    const passwordErr = passwordErrorHandler(password);

    // Set error states
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    // Only proceed if there are no errors
    if (!emailErr && !passwordErr) {
      login({ email, password });
    }
  }

  const emailErrorHandler = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      return "Email cannot be empty.";
    }
    if (!emailPattern.test(email)) {
      return "Invalid email format.";
    }
    return null;
  };

  const passwordErrorHandler = (password) => {
    if (!password) {
      return "Password cannot be empty.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return null;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-96 md:mt-12 flex flex-col items-center justify-center gap-4 w-max p-4 sm:p-6 md:p-8 m-4 rounded-md border-2 border-slate-200/10 bg-slate-800/50">
        <h1 className="text-4xl w-full text-center my-6 font-bold tracking-tight text-slate-200 sm:text-5xl">
          Login
        </h1>
        {/* <button
          onClick={() => loginWithGoogle()}
          className="flex gap-4 items-center justify-center rounded-full bg-teal-400/10 px-8 py-4 text-lg font-medium leading-5 text-teal-300 hover:opacity-75 cursor-pointer transition-all w-full"
        >
          {isLoggingWithGoogle ? (
            <LoadingSpinner />
          ) : (
            <>
              <FcGoogle /> Continue With Google
            </>
          )}
        </button> */}
        <p className="w-full uppercase font-medium text-sm text-slate-200 flex items-center justify-center">
          <span className="line"></span>
          <span className="px-4">Or</span>
          <span className="line"></span>
        </p>
        <form
          onSubmit={handleLogin}
          className="w-full flex gap-4 items-center justify-center flex-col"
        >
          <div className="w-full flex flex-col justify-start items-start">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 border bg-slate-800/60 border-slate-200/10 text-gray-800 rounded-md shadow-sm outline-none transition-all duration-200 ease-in-out"
            />
            {emailError && (
              <p className="text-red-500 text-sm font-medium py-2">
                {emailError}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border bg-slate-800/60 border-slate-200/10 text-gray-800 rounded-md shadow-sm outline-none transition-all duration-200 ease-in-out"
            />
            {passwordError && (
              <p className="text-red-500 text-sm font-medium py-2">
                {passwordError}
              </p>
            )}
          </div>

          <button className="w-full justify-center flex items-center rounded-full bg-teal-400/20 px-8 py-4 text-lg font-medium leading-5 text-teal-300 hover:opacity-75 cursor-pointer transition-all">
            {isLogging ? <LoadingSpinner /> : "Login"}
          </button>
          {(googleError || error) && (
            <p className="text-red-500 text-sm font-medium py-2">
              {googleError?.message || error?.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
