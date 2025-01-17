import React, { useState } from "react";
import axios from "axios";

function UploadVideo() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Error uploading video");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadVideo;
