
import WelcomeScreen from "./WelcomeScreen";
import FlashCards from "./FlashCards";
import React from "react";

export default function App(){
        
    const[changeScreen, setChangeScreen] = React.useState(true);
    
      
    return(
    <>
     
     {changeScreen ? <WelcomeScreen changeScreen={changeScreen} setChangeScreen={setChangeScreen}/> : <FlashCards />} 
      
    </>
    
    );
}