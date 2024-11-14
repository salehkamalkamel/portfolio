import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

async function apiGetSkills() {
  try {
    const docRef = doc(db, "skills", "XwdVRjAT7TfLVteU6BCd");
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
    console.error("Error on get skills:", error.message);
    throw new Error(error.message);
  }
}
export { apiGetSkills };
