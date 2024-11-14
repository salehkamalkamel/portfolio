import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function apiUpdateProject(projectId, updatedProjectData) {
  console;
  try {
    // Get a reference to the document that contains the data array
    const projectDocRef = doc(db, "projects", "1KVl2sreTK6D5aT1Op4u");

    // Retrieve the current document data
    const projectDoc = await getDoc(projectDocRef);

    if (!projectDoc.exists()) {
      throw new Error("Document does not exist!");
    }

    // Retrieve the current data array
    const currentProjects = projectDoc.data().data || [];

    // Find the index of the project to update
    const projectIndex = currentProjects.findIndex(
      (proj) => proj.id === projectId
    );

    if (projectIndex === -1) {
      throw new Error("Project not found!");
    }

    // Create a new array with the updated project
    const updatedProjects = [...currentProjects];
    updatedProjects[projectIndex] = {
      ...updatedProjects[projectIndex],
      ...updatedProjectData,
    };

    // Update the document with the modified data array
    await updateDoc(projectDocRef, { data: updatedProjects });

    console.log("Project updated successfully!");
  } catch (err) {
    console.error("Error updating project:", err);
    throw new Error(err.message);
  }
}
