import React from 'react';

export const ImageGrid = ({ images, setSelectedImage }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setSelectedImage(image)}
          />
        </div>
      ))}
    </div>
  );
};
