import { useState } from "react";
import style from "@emotion/styled";


function Component (props){
 const { backgroundImage, text } = props;

 const containerStyle = {
    width: 250, 
    height: 290,
    backgroundImage, 
    borderRadius: 25,
    position: "relative",
 }

 const [isHovered, setIsHovered] = useState(false);
    
 const handleMouseEnter = () => {
   setIsHovered(true);
 };

 const handleMouseLeave = () => {
   setIsHovered(false);
 };

   const buttonStyle = {
    width: 250,
    height: 80,
    borderRadius: 25,
    position: "absolute",
    bottom: 0,
    background: isHovered ? "red": "#F34949",
    color: isHovered ? "#161A1D": "white",
    text,
    textAlign: "center",
    fontSize: 20,
    cursor: "pointer",
 }
 
 

 return (
    <div style={containerStyle}>
        <button style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{text}</button>
    </div>
 );
}
export default Component;