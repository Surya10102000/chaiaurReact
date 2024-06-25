import React from "react";
const colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
 
];


const Bar = ({setColor}) => {
    console.log('bar');
    const listItems = colorArray.map( (color) => <div><button className="bg-red-800 p-3 rounded-md" 
    onClick={() => setColor(color)}
    style={{backgroundColor : color}}>{color}</button></div>) 
  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 bg-slate-50 mx-5 rounded-full h-12 gap-2 ">
     {listItems} 
      
    </div>
  );
};

export default Bar;
