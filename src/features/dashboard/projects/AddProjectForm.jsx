import { useState } from "react";
import TextInput from "../../../ui/TextInput";
import Button from "../../../ui/Button";
import { v4 as uuidv4 } from "uuid";
import TextArea from "../../../ui/Textarea";
import { useAddProject } from "../../../hooks/useAddProject";
import LoadingSpinner from "../../loading/LoadingSpinner";

export default function AddProjectForm() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: "",
    subtitle: "",
    story: "",
    info: "",
    gitHubLink: "",
    website: "",
    websiteLabel: "",
    tools: "",
    skills: "",
    imageAlt: "",
    imageSrc: "",
    year: "",
    company: "",
  });

  const { addProject, isAddingProject } = useAddProject();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Regex pattern for URL validation
    const urlPattern = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/[^\s]*)?$/i;

    // Basic required field validations
    if (!formData.title) newErrors.title = "Project title is required.";
    if (!formData.subtitle)
      newErrors.subtitle = "Project subtitle is required.";
    if (!formData.story) newErrors.story = "Please describe the project story.";
    if (!formData.info)
      newErrors.info = "Please provide a brief project description.";
    if (!formData.tools)
      newErrors.tools = "Tools are required (comma-separated).";
    if (!formData.skills)
      newErrors.skills = "Skills are required (comma-separated).";
    if (!formData.year) newErrors.year = "Project year is required.";
    if (formData.year && isNaN(Number(formData.year)))
      newErrors.year = "Year must be a number.";

    // URL field validations
    if (!formData.gitHubLink) {
      newErrors.gitHubLink = "GitHub link is required.";
    } else if (!urlPattern.test(formData.gitHubLink)) {
      newErrors.gitHubLink = "Invalid URL format for GitHub link.";
    }

    if (!formData.website) {
      newErrors.website = "Website link is required.";
    } else if (!urlPattern.test(formData.website)) {
      newErrors.website = "Invalid URL format for website link.";
    }

    // Optional URL validation for imageSrc (only if entered)
    if (formData.imageSrc && !urlPattern.test(formData.imageSrc)) {
      newErrors.imageSrc = "Invalid URL format for image source.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validateForm());
    console.log("Project Data:", formData);
    addProject(formData);
    // Here, you would add the function to handle submission, e.g., send data to the server or update the state.
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl p-12 md:text-4xl w-full text-center font-semibold tracking-tight text-slate-200">
        Add New Project
      </h1>
      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-8 mb-8 rounded-lg border-2 border-slate-200/10 bg-slate-800/70 flex flex-col gap-4 w-full max-w-2xl"
      >
        {/* Project Title */}
        <TextInput
          label="Project Title"
          name="title"
          placeholder="Enter project title"
          value={formData.title}
          onChange={handleChange}
          error={errors.title}
        />
        <TextInput
          label="website Label"
          name="websiteLabel"
          placeholder="Enter website Label"
          value={formData.websiteLabel}
          onChange={handleChange}
          error={errors.websiteLabel}
        />

        {/* Project Subtitle */}
        <TextInput
          label="Project Subtitle"
          name="subtitle"
          placeholder="Enter project subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          error={errors.subtitle}
        />

        {/* Project Story */}
        <TextArea
          label="Project Story"
          name="story"
          placeholder="Describe the story behind the project"
          value={formData.story}
          onChange={handleChange}
          error={errors.story}
        />

        {/* GitHub Link */}
        <TextInput
          label="GitHub Link"
          name="gitHubLink"
          type="url"
          placeholder="Enter GitHub link"
          value={formData.gitHubLink}
          onChange={handleChange}
          error={errors.gitHubLink}
        />

        {/* Website Link */}
        <TextInput
          label="Website Link"
          name="website"
          type="url"
          placeholder="Enter website link"
          value={formData.website}
          onChange={handleChange}
          error={errors.website}
        />

        {/* Project Info */}
        <TextArea
          label="Project Info"
          name="info"
          placeholder="Provide a brief description of the project"
          value={formData.info}
          onChange={handleChange}
          error={errors.info}
        />

        {/* Tools */}
        <TextInput
          label="Tools (comma-separated)"
          name="tools"
          placeholder="e.g., React, Tailwind CSS"
          value={formData.tools}
          onChange={handleChange}
          error={errors.tools}
        />

        {/* Skills */}
        <TextInput
          label="Skills (comma-separated)"
          name="skills"
          placeholder="e.g., React, CSS, JavaScript"
          value={formData.skills}
          onChange={handleChange}
          error={errors.skills}
        />

        {/* Image Source */}
        <TextInput
          label="Image Source"
          name="imageSrc"
          placeholder="Enter image file path or URL"
          value={formData.imageSrc}
          onChange={handleChange}
        />

        {/* Image Alt Text */}
        <TextInput
          label="Image Alt Text"
          name="imageAlt"
          placeholder="Describe the image"
          value={formData.imageAlt}
          onChange={handleChange}
        />

        {/* Year */}
        <TextInput
          label="Year"
          name="year"
          type="number"
          placeholder="Enter project year"
          value={formData.year}
          onChange={handleChange}
          error={errors.year}
        />

        {/* Company */}
        <TextInput
          label="Company/Personal"
          name="company"
          placeholder="Personal Project or Company Name"
          value={formData.company}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full flex items-center justify-center"
        >
          {isAddingProject ? <LoadingSpinner /> : "Add Project"}
        </Button>
      </form>
    </div>
  );
}
