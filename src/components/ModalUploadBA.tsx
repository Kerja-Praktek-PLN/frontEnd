import React, { useState, ChangeEvent } from "react";

interface ImageUploadModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ isOpen, closeModal }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const [selectedImage1, setSelectedImage1] = useState("");

  // const [selectedImage2, setSelectedImage2] = useState("");

  // const [selectedImage1, setSelectedImage1] = useState("");
  
  // const [selectedImage2, setSelectedImage2] = useState("");

  const [showUploadButton, setShowUploadButton] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string); // Cast to string
      };
      reader.readAsDataURL(file);
    }
  };
  
  const clearSelectedImage = () => {
    setSelectedImage(null); // Set it back to null or an empty string
  };

  const handleOpenCamera = () => {
    // smbrng
  }

  // const handleUpload = () => {
  //   closeModal();
  // }

  return (
    <div
      className={`fixed z-99 inset-0 flex items-center justify-center ${
        isOpen ? "bg-black bg-opacity-40" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg mb-2 text-black font-medium">Unggah Gambar Sebelum</h2>
        <div className="h-px mb-2 border border-black" />
        <div className="flex justify-between">
            <div className="shadow border-lg m-2 w-1/2" >
              {selectedImage && (
                <div 
                  className="border border-black p-5 h-full "
                  onMouseEnter={() => setShowUploadButton(true)}
                  onMouseLeave={() => setShowUploadButton(false)}
                  >
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="max-h-full mx-auto max-w-full"                    
                  />
                </div>
              )}
            </div>


          <div className="flex flex-col">
          <label 
            className="my-2 relative inline-flex items-center bg-[#E5E5E5] text-black opacity-40 rounded-md px-4 py-2 cursor-pointer hover:bg-primary-dark">
            <input 
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 33 39"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              id="vector" d="M16.4996 25.05V1M16.4996 1L21.1496 7.475M16.4996 1L11.8496 7.475"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              id="vector_2_" d="M10.3 37.9999H22.7C27.0834 37.9999 29.2766 37.9999 30.6375 36.3756C32 34.7476 32 32.1336 32 26.8999V25.0499C32 19.8181 32 17.2022 30.6375 15.5761C29.4471 14.1553 27.6212 13.9758 24.25 13.9536M8.75 13.9536C5.37875 13.9758 3.55285 14.1553 2.36245 15.5761C1 17.2022 1 19.8181 1 25.0499V26.8999C1 32.1336 1 34.7495 2.36245 36.3756C2.82745 36.9306 3.38855 37.2951 4.1 37.5356"
            />
          </svg>
            Unggah File
          </label>          


          <label 
            className="my-2 relative inline-flex items-center bg-[#E5E5E5] text-black opacity-40 rounded-md px-4 py-2 cursor-pointer hover:bg-primary-dark"
            // onClick={handleOpenCamera}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 48 44"
                stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M40 7.33317H33.66L30 3.6665H18L14.34 7.33317H8C6.93913 7.33317 5.92172 7.71948 5.17157 8.40711C4.42143 9.09475 4 10.0274 4 10.9998V32.9998C4 33.9723 4.42143 34.9049 5.17157 35.5926C5.92172 36.2802 6.93913 36.6665 8 36.6665H40C41.0609 36.6665 42.0783 36.2802 42.8284 35.5926C43.5786 34.9049 44 33.9723 44 32.9998V10.9998C44 10.0274 43.5786 9.09475 42.8284 8.40711C42.0783 7.71948 41.0609 7.33317 40 7.33317ZM40 32.9998H8V10.9998H16.1L19.76 7.33317H28.24L31.9 10.9998H40V32.9998ZM24 12.8332C21.3478 12.8332 18.8043 13.7989 16.9289 15.518C15.0536 17.2371 14 19.5687 14 21.9998C14 24.431 15.0536 26.7626 16.9289 28.4816C18.8043 30.2007 21.3478 31.1665 24 31.1665C26.6522 31.1665 29.1957 30.2007 31.0711 28.4816C32.9464 26.7626 34 24.431 34 21.9998C34 19.5687 32.9464 17.2371 31.0711 15.518C29.1957 13.7989 26.6522 12.8332 24 12.8332ZM24 27.4998C22.4087 27.4998 20.8826 26.9204 19.7574 25.8889C18.6321 24.8575 18 23.4585 18 21.9998C18 20.5411 18.6321 19.1422 19.7574 18.1107C20.8826 17.0793 22.4087 16.4998 24 16.4998C25.5913 16.4998 27.1174 17.0793 28.2426 18.1107C29.3679 19.1422 30 20.5411 30 21.9998C30 23.4585 29.3679 24.8575 28.2426 25.8889C27.1174 26.9204 25.5913 27.4998 24 27.4998Z"
                    />
                </svg>
                Ambil Foto
          </label>
          </div>
        
        </div>
        <div className="flex justify-end my-2">
          <button
            className="px-4 py-2 mr-2 border text-black rounded hover:bg-blue-600"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#469AA7] text-white  rounded hover:bg-green-600"
            onClick={() => {
              // Handle image upload here
              closeModal();
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
