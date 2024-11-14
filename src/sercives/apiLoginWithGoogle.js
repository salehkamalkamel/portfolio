import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

async function apiLoginWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    console.log("User logged in with Google:", user);
    return user;
  } catch (error) {
    console.error("Google login error:", error.message);
    throw new Error(error.message);
  }
}

export { apiLoginWithGoogle };
