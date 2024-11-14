import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

async function apiLogin(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User logged in:", user);
    return user;
  } catch (error) {
    console.error("Login error:", error.message);
    throw new Error(error.message);
  }
}

export { apiLogin };
