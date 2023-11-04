import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
const Gallery = ({ item, onDragOver, startDrag, onDrop, index, handleSelected, handleNotSelected}) => {

  const [hovered, setHovered] = useState(false);
  const [checked, setChecked] = useState(false);
 
  const isHover = () => {
    setHovered(true);
  };
  const select = () => {
    
    handleSelected()
    setChecked(!checked);
    if(checked){
handleNotSelected()
    }
    console.log('clicked')
  
  };
  const notHovered = () => {
    setHovered(false);
    if (checked){
      setHovered(true)
    }
  };

  
  const notSelected = () =>{
    setChecked(false);
    
  }

  return (
    <div
      className="relative first:bg-transparent first:row-span-2 first:col-span-2"
      draggable="true"
      onDragStart={(event) => startDrag(index, event)}
      onDragOver={(event) => onDragOver(event)}
      onDrop={(event) => onDrop(index, event)}
    >
      <div onMouseOver={isHover} onMouseOut={notHovered} >
      <img  
        className="w-[100%] hover:blur-sm hover:-opacity-100 object-contain first:object-cover border rounded border-gray-300"
        src={item}
      />
      
      {hovered && (
        <div onClick={select}  className="bg-blue-500 absolute top-4 left-4 w-4 h-4">

          {checked && <FaCheck className="p-1  text-white" />}
        
        </div>
        
      )}
      
      </div>
      
     
    </div>
  );
};

export default Gallery;
