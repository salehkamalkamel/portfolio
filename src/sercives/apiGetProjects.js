import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

async function apiGetProjects() {
  try {
    const docRef = doc(db, "projects", "1KVl2sreTK6D5aT1Op4u");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Get the data array from the document
      const dataArray = docSnap.data().data; // Access the "data" field

      if (Array.isArray(dataArray)) {
        return dataArray;
      } else {
        console.error("The data field is not an array.");
      }
    } else {
      console.error("No such document!");
    }
  } catch (error) {
    console.error("Error on get projects:", error.message);
    throw new Error(error.message);
  }
}

export { apiGetProjects };
