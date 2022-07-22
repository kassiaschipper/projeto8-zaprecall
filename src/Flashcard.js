import React from "react";
import QuestionNamber from "./QuestionNumber";
import Question from "./Question";
import Answer from "./Answer";
import Answered from "./Answered";


export default function FlashCard ({index, question, answer}){
    
    const [flahscardState, SetFlahscardState] = React.useState("questionNamber")
    // const [answer, setAnswer] = React.useState("")
    // const [imgAnswer, setImgAnswer] = React.useState("")
    
    if(flahscardState === "questionNamber"){
        return(
            <QuestionNamber index={index} SetFlahscardState={SetFlahscardState} />
        );
    } else if(flahscardState === "question"){
         return(
             <Question  question={question} SetFlahscardState={setInterval}/>
         );
     }else if (flahscardState === "answer") {
         return(
            <QuestionNamber index={index} SetFlahscardState={SetFlahscardState} />
             
          );
    } 
    // else{
    //     return(
    //         <QuestionNamber index={index} SetFlahscardState={SetFlahscardState} />
    //     );
    // }
    
   
}


