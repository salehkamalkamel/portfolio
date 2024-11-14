import { useEffect, useState } from "react";
import TextInput from "../../../ui/TextInput";
import TextArea from "../../../ui/Textarea";
import Button from "../../../ui/Button";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "../../loading/LoadingSpinner";
import { useParams } from "react-router-dom";
import { useGetSkillById } from "../../../hooks/useGetSkillById";
import LoadingPage from "../../loading/LoadingPage";
import { useUpdateSkill } from "../../../hooks/useUpdateSkill";

export default function EditSkillForm() {
  const { skillId } = useParams();
  const { skill, isGettingskill } = useGetSkillById(skillId);
  const { updateSkill, isUpdatingSkill } = useUpdateSkill();
  const initialFormData = {
    id: skill?.id || uuidv4(),
    title: skill?.title || "",
    info: skill?.info || "",
    link: skill?.link || "",
    tools: skill?.tools || [],
    icon: skill?.icon || "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(initialFormData);
  }, [skill]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.info) newErrors.info = "Info is required.";
    if (
      formData.link &&
      !/^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/[^\s]*)?$/i.test(formData.link)
    ) {
      newErrors.link = "Please enter a valid URL.";
    }
    if (!formData.tools.length)
      newErrors.tools = "Please select at least one tool.";
    if (!formData.icon) newErrors.icon = "Please select an icon.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Skill Data:", formData);
      updateSkill({ skillId, updatedSkillData: formData });
      // Handle the form submission (e.g., save data to server or database)
    }
  };
  if (isGettingskill) return <LoadingPage />;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl p-12 md:text-4xl w-full text-center font-semibold tracking-tight text-slate-200">
        Add New Skill
      </h1>
      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-8 mb-8 rounded-lg border-2 border-slate-200/10 bg-slate-800/70 flex flex-col gap-4 w-full max-w-2xl"
      >
        <TextInput
          label="Skill Title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          error={errors.title}
          placeholder="Enter skill title, e.g., HTML"
        />

        <TextArea
          label="Skill Info"
          name="info"
          value={formData.info}
          onChange={handleChange}
          error={errors.info}
          placeholder="Describe the skill in detail"
        />

        <TextInput
          label="Reference Link"
          name="link"
          type="url"
          value={formData.link}
          onChange={handleChange}
          error={errors.link}
          placeholder="Enter reference link, e.g., https://developer.mozilla.org"
        />

        <TextInput
          label="Tools (comma-separated)"
          name="tools"
          value={formData.tools}
          onChange={handleChange}
          error={errors.tools}
          placeholder="e.g., Tags, Attributes, SEO"
        />
        <TextInput
          label="Icon"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          error={errors.icon}
          placeholder="e.g., React, Tailwind, Next"
        />

        <Button
          type="submit"
          className="w-full flex items-center justify-center"
        >
          {isUpdatingSkill ? <LoadingSpinner /> : "Add Skill"}
        </Button>
      </form>
    </div>
  );
}
