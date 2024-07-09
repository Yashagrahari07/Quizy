// api/cloudinary.js
export const uploadProfilePicture = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Quizy_upload'); // Replace with your Cloudinary upload preset
  
    const res = await fetch('https://api.cloudinary.com/v1_1/dtugzciqs/image/upload', {
      method: 'POST',
      body: formData,
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.error.message);
    }
  
    return data.secure_url; // Return the URL of the uploaded image
  };
  