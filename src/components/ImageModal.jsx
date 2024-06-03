import React from 'react';

export const ImageModal = ({ selectedImage, setSelectedImage }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <img src={selectedImage} alt="Selected" className="max-h-screen" />
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};