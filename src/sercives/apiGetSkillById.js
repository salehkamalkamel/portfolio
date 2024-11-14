import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

async function apiGetSkillById(skillId) {
  try {
    // Reference the document in the "skills" collection with ID "1KVl2sreTK6D5aT1Op4u"
    const docRef = doc(db, "skills", "XwdVRjAT7TfLVteU6BCd");

    // Fetch the document
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Get the data array from the document
      const dataArray = docSnap.data().data;

      if (Array.isArray(dataArray)) {
        // Find the skill by skillId within the data array
        const skill = dataArray.find((item) => item.id === skillId);

        if (skill) {
          return skill;
        } else {
          throw new Error("skill not found in data array");
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

export { apiGetSkillById };
