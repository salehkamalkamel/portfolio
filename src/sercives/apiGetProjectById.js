import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

async function apiGetProjectById(projectId) {
  try {
    // Reference the document in the "projects" collection with ID "1KVl2sreTK6D5aT1Op4u"
    const docRef = doc(db, "projects", "1KVl2sreTK6D5aT1Op4u");

    // Fetch the document
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Get the data array from the document
      const dataArray = docSnap.data().data;

      if (Array.isArray(dataArray)) {
        // Find the project by projectId within the data array
        const project = dataArray.find((item) => item.id === projectId);

        if (project) {
          return project;
        } else {
          throw new Error("Project not found in data array");
        }
      } else {
        throw new Error("Data field is not an array");
      }
    } else {
      throw new Error("Document not found");
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

export { apiGetProjectById };
