import React from "react";

export default function Answer({ setFlashCardState, answer, setAnswered,images,setImages, setAnswerImg}) {
  function options() {
    setFlashCardState("answered");
  }
  function stateAnswer(recallStatus){
    setAnswered(recallStatus);    
  }
  function answerImg(){
    setAnswerImg([...images, correspondingImage
    ]);
    setImages([correspondingImage]);
  }


  return (
    <li className="answer">
      <div className="answer-value">
        <span className="text">{answer}</span>
      </div>
      <div className="options">
        <div className="wrong" onClick={() => {options(); stateAnswer("wrong"); answerImg("wrong-image")}} >Não lembrei</div>
        <div className="notYet" onClick={() => {options(); stateAnswer("notYet"); answerImg("notYet-image")}}>Quase não lembrei</div>
        <div className="right" onClick={() => {options(); stateAnswer("right"); answerImg("right-image")}}>Zap!</div>
      </div>
    </li>
  );
}

