
import WelcomeScreen from "./WelcomeScreen";
import FlashCards from "./FlashCards";
import React from "react";
import "./assets/css/reset.css";
import "./assets/css/style.css";



export default function App(){
        
    const[changeScreen, setChangeScreen] = React.useState(true);
    
      
    return(
    <>
     
     {changeScreen ? <WelcomeScreen changeScreen={changeScreen} setChangeScreen={setChangeScreen}/> : <FlashCards />} 
      
    </>
    
    );
}