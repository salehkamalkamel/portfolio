import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

async function apiDeleteProjectById(projectId) {
  try {
    const docRef = doc(db, "projects", "1KVl2sreTK6D5aT1Op4u");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const dataArray = docSnap.data().data;

      // Filter out the project with the matching projectId
      const filteredArray = dataArray.filter(
        (project) => project.id !== projectId
      );

      // Update Firestore with the filtered array
      await updateDoc(docRef, { data: filteredArray });

      console.log("Project deleted successfully");
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error deleting project:", error);
    throw new Error(error.message);
  }
}

export { apiDeleteProjectById };
