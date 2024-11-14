import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

async function apiDeleteSkillById(skillId) {
  try {
    const docRef = doc(db, "skills", "XwdVRjAT7TfLVteU6BCd");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const dataArray = docSnap.data().data;

      // Filter out the skill with the matching skillId
      const filteredArray = dataArray.filter((skill) => skill.id !== skillId);

      // Update Firestore with the filtered array
      await updateDoc(docRef, { data: filteredArray });

      console.log("skill deleted successfully");
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error deleting skill:", error);
    throw new Error(error.message);
  }
}

export { apiDeleteSkillById };
