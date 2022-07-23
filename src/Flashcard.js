import React from "react";
import QuestionNumber from "./QuestionNumber";
import Question from "./Question";
import Answer from "./Answer";
import Answered from "./Answered";


export default function FlashCard ({index, question, answer, images, setImages}){
    
    const [flashCardState, setFlashCardState] = React.useState("questionNumber")
    const [answered, setAnswered] = React.useState("")
    const [answerImg, setAnswerImg] = React.useState("")

    
    
    if(flashCardState === "questionNumber"){
        return(
            <QuestionNumber index={index} setFlashCardState={setFlashCardState} />
        );
    }else if(flashCardState === "question"){
         return(
             <Question  question={question} setFlashCardState={setFlashCardState}/>
         );
     }else if (flashCardState === "answer") {
         return(
            <Answer  answer={answer} setAnswered={setAnswered} setAnswerImg={setAnswerImg} setFlashCardState={setFlashCardState} images={images} setImages={setImages}/>
            );
    } 
    // else{
    //     return(
    //         <QuestionNumber index={index} setFlashCardState={setFlashCardState} />
    //     );
    // }
    
   
}


