import { useState } from "react";
import style from "@emotion/styled";


function Component (props){
 const { backgroundImage, text } = props;

 const containerStyle = {
    width: 250, 
    height: 230,
    backgroundImage,
    backgroundSize: "cover", 
    //backgroundRepeat: "no-repeat",
    borderRadius: 25,
    position: "relative",
    boxShadow: "3px 3px 2px 0px rgba(128, 128, 128, 0.30)",
    
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
    background: isHovered ? "#BA181B": "#F34949",
    fontWeight: isHovered ? "bold" : "normal",
    color:  "white",
    letterSpacing: 1,
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