import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function apiAddComment(comment) {
  try {
    const projectDocRef = doc(db, "comments", "TinsZMtwO3AbaaQPUYW4");
    await updateDoc(projectDocRef, {
      data: arrayUnion(comment),
    });

    console.log("Comment added successfully!");
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
