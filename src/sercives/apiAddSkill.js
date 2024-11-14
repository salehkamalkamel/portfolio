import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function apiAddSkill(newSkill) {
  try {
    const skillDocRef = doc(db, "skills", "XwdVRjAT7TfLVteU6BCd");
    await updateDoc(skillDocRef, {
      data: arrayUnion(newSkill),
    });

    console.log("skill added successfully!");
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
