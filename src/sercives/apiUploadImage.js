export const apiUploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "portfolio-images"); // Replace with your preset name

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Image upload failed");
  }

  return response.json(); // Returns the uploaded image data
};
