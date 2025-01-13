// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const images = [
//   "/backgrounds-images/Orginal.png", // Replace these with actual image paths in your public folder
//   "/backgrounds-images/Nazul1.png",
//   "/backgrounds-images/Nazul2.png",
//   "/backgrounds-images/Nazul3.png",
// ];
// const Gallery = ({ isBidding }) => {
//   const [selectedImage, setSelectedImage] = useState(0);

//   // Handle thumbnail click
//   const handleThumbnailClick = (index) => {
//     setSelectedImage(index);
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-4">
//       {/* Thumbnails */}
//       <div className="flex flex-row md:flex-col justify-around items-center md:px-4 gap-4 order-2 md:order-1 md:py-2">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`${
//               selectedImage === index
//                 ? "border border-[#0000004D] p-2 rounded-md"
//                 : "p-3"
//             }`} // Highlight active thumbnail
//           >
//             <Image
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//               onClick={() => handleThumbnailClick(index)}
//               className="cursor-pointer object-cover w-[50px] h-[50px] md:w-[80px] md:h-[75px]"
//               width={80}
//               height={75}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className="flex-grow flex items-center order-1 md:order-2">
//         <div className="relative">
//           <Image
//             src={images[selectedImage]}
//             alt="Main Art"
//             className={`border rounded-lg w-[395px] md:w-[550px] h-auto ${
//               isBidding ? "md:h-[525px]" : "md:h-[480px]"
//             }`}
//             width={550}
//             height={isBidding ? 525 : 480}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const images = [
//   "/backgrounds-images/Orginal.png", // Replace with actual image paths
//   "/backgrounds-images/Nazul1.png",
//   "/backgrounds-images/Nazul2.png",
//   "/backgrounds-images/Nazul3.png",
// ];

// const Gallery = ({ isBidding }) => {
//   const [selectedImage, setSelectedImage] = useState(0);

//   const handleThumbnailClick = (index) => {
//     setSelectedImage(index);
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-4">
//       {/* Thumbnails */}
//       <div className="flex flex-row md:flex-col justify-around items-center md:px-4 gap-4 order-2 md:order-1 md:py-2">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`${
//               selectedImage === index
//                 ? " p-2 rounded-md shadow-lg bg-gray-50"
//                 : "p-3 bg-gray-100 rounded-md shadow-sm"
//             }`}
//           >
//             <Image
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//               onClick={() => handleThumbnailClick(index)}
//               className="cursor-pointer object-cover w-[50px] h-[50px] md:w-[80px] md:h-[75px] rounded-md"
//               width={80}
//               height={75}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Main Image with Layered Frames */}
//       <div className="flex-grow flex items-center justify-center order-1 md:order-2">
//         <div className="relative">
//           {/* Layers of frames */}
//           <div className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] bg-gray-200 rounded-lg shadow-lg -rotate-4 z-0"></div>
//           <div className="absolute w-[395px] h-[395px] md:w-[545px] md:h-[545px] bg-white rounded-lg shadow-md rotate-1 z-10"></div>
//           {/* Main Image */}
//           <Image
//             src={images[selectedImage]}
//             alt="Main Art"
//             className="relative  rounded-lg w-[390px] md:w-[540px] h-auto z-20"
//             width={550}
//             height={isBidding ? 525 : 480}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
const images = [
  "/backgrounds-images/Orginal.png", // Replace with actual image paths
  "/backgrounds-images/Nazul1.png",
  "/backgrounds-images/Nazul2.png",
  "/backgrounds-images/Nazul3.png",
];

  const [selectedImage, setSelectedImage] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  // Calculate preview images indices
  const getPreviewIndices = () => {
    const indices = [];
    const totalImages = images.length;
    
    for (let i = 0; i < 3; i++) {
      indices.push((selectedImage + i) % totalImages);
    }
    
    return indices;
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
              selectedImage === index
                ? "ring-2 ring-gray-300 shadow-lg"
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="cursor-pointer rounded-lg w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover p-4"
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>

      {/* Main Display Area */}
      <div className="flex-grow flex items-center justify-center order-1 md:order-2 ">
        <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
          {/* Preview Stack */}
          {getPreviewIndices().map((imageIndex, stackIndex) => (
            <div
              key={imageIndex}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out
                ${stackIndex === 0 ? 'z-30' : ''}
                ${stackIndex === 1 ? 'z-20 translate-x-4 -translate-y-4 -rotate-3' : ''}
                ${stackIndex === 2 ? 'z-10 translate-x-8 -translate-y-8 rotate-3' : ''}
              `}
            >
              <div className="relative w-full h-full  rounded-lg ">
                <Image
                  src={images[imageIndex]}
                  alt={`Frame ${imageIndex + 1}`}
                  className="rounded-lg object-fit"
                  fill
                  sizes="(max-width: 768px) 400px, 500px"
                  priority={stackIndex === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;