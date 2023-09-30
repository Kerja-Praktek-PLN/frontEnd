import React, { useState } from "react";

const ImageUploadModal = ({ isOpen, closeModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can handle the selected image here
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          className="mb-4"
          onChange={handleImageChange}
        />
        {selectedImage && (
          <img src={selectedImage} alt="Selected" className="mb-4" />
        )}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => {
              // Handle image upload here
              closeModal();
            }}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
