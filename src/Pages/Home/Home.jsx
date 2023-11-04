import React, { useState } from "react";
import img1 from "../../assets/images/image-1.webp";
import img2 from "../../assets/images/image-2.webp";
import img3 from "../../assets/images/image-3.webp";
import img4 from "../../assets/images/image-4.webp";
import img5 from "../../assets/images/image-5.webp";
import img6 from "../../assets/images/image-6.webp";
import img7 from "../../assets/images/image-7.webp";
import img8 from "../../assets/images/image-8.webp";
import img9 from "../../assets/images/image-9.webp";
import img10 from "../../assets/images/image-10.jpeg";
import img11 from "../../assets/images/image-11.jpeg";
import Gallery from "../Gallery/Gallery";
import styles from "./Styling/feature.css";
import { FaCheck } from "react-icons/fa";
const Home = () => {
  const imgGallery = [
    img11,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img1,
  ];
  const [images, setImages] = useState(imgGallery);
  const [isDragging, setIsDragging] = useState(false);
  const [dragIndex, setDragIndex] = useState(-1);
  const [dragOffset, setDragOffset] = useState(0);
  const [count,SetCount] = useState(0);
const handleSelected = () =>{
  SetCount(count+1)
}
const handleNotSelected = () =>{
  const newCount = count-1;
  SetCount(newCount)
}
  const startDrag = (index, event) => {
    setDragIndex(index);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text", index);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (index, event) => {
    event.preventDefault();
    const movedImageIndex = event.dataTransfer.getData("text");
    if (movedImageIndex !== "") {
      const fromIndex = parseInt(movedImageIndex);
      const toIndex = index;

      // Rearrange the images array
      const movedImage = images[fromIndex];
      const updatedImages = [...images];
      updatedImages.splice(fromIndex, 1);
      updatedImages.splice(toIndex, 0, movedImage);
      setImages(updatedImages);
    }
    setDragIndex(-1);
  };

  return (
    <div>
      <div className="w-full p-4 mb-4 border border-gray-400 text-start">
<p className="flex items-center"><FaCheck className="p-1 bg-blue-500 text-white text-start mr-2"/><span>{count} Files Selected</span></p>
      </div>
<div className=" parent grid grid-cols-5 gap-1 border-2 p-8 ">
      {images.map((item, index) => (
        <Gallery
          item={item}
          key={index}
          index={index}
          draggable="true"
          startDrag={startDrag}
          onDragOver={onDragOver}
          onDrop={onDrop}
          handleSelected={handleSelected}
          handleNotSelected={handleNotSelected}
        ></Gallery>
      ))}
    </div>
    </div>
    
  );
};

export default Home;
