
import WellcomeScreen from "./WellcomeScreen";
import FlashCards from "./FlashCards";
import React from "react";

export default function App(){
        
    const[changeScreen, setChangeScreen] = React.useState(true);
    
      
    return(
    <>
     
     {changeScreen ? <WellcomeScreen changeScreen={changeScreen} setChangeScreen={setChangeScreen}/> : <FlashCards />} 
      
    </>
    
    );
}