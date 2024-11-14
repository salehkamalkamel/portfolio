import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function apiUpdateSkill(skillId, updatedskillData) {
  console;
  try {
    // Get a reference to the document that contains the data array
    const skillDocRef = doc(db, "skills", "XwdVRjAT7TfLVteU6BCd");

    // Retrieve the current document data
    const skillDoc = await getDoc(skillDocRef);

    if (!skillDoc.exists()) {
      throw new Error("Document does not exist!");
    }

    // Retrieve the current data array
    const currentskills = skillDoc.data().data || [];

    // Find the index of the skill to update
    const skillIndex = currentskills.findIndex((proj) => proj.id === skillId);

    if (skillIndex === -1) {
      throw new Error("skill not found!");
    }

    // Create a new array with the updated skill
    const updatedskills = [...currentskills];
    updatedskills[skillIndex] = {
      ...updatedskills[skillIndex],
      ...updatedskillData,
    };

    // Update the document with the modified data array
    await updateDoc(skillDocRef, { data: updatedskills });

    console.log("skill updated successfully!");
  } catch (err) {
    console.error("Error updating skill:", err);
    throw new Error(err.message);
  }
}
