import React from "react";
import QuestionNumber from "./QuestionNumber";
import Question from "./Question";
import Answer from "./Answer";
import Answered from "./Answered";


export default function FlashCard ({index, question, answer, images, setImages}){
    
    const [flashCardState, setFlashCardState] = React.useState("questionNumber")// controle de estado inicial dos cards iniciando na primeira tela
    const [answered, setAnswered] = React.useState("") //controle de estado para as 3 opçoes de resposta (não lembrei, quase não lemrei e zap!)
    const [answerImg, setAnswerImg] = React.useState("") //controle de estado das imagens após resposta

    
    
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
    }else if (flashCardState === "answered"){
        return(
             <Answered index={index} answerImg={answerImg} answered={answered}/>
         );
    }
    
   
}


