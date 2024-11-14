import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function apiAddProject(newProject) {
  console.log(newProject);
  try {
    const projectDocRef = doc(db, "projects", "1KVl2sreTK6D5aT1Op4u");
    await updateDoc(projectDocRef, {
      data: arrayUnion(newProject),
    });

    console.log("Project added successfully!");
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
