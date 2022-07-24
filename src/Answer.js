import React from "react";

export default function Answer({ setFlashCardState, answer, setAnswered,images,setImages, setAnswerImg}) {
  function options() { //função para alterar o estado dos cards
    setFlashCardState("answered");
  }
  function stateAnswer(recallStatus){ // função para alterar o estado da resposta (não lembrei, quase não lemrei e zap!) 
    setAnswered(recallStatus);    
  }
  
  function stateAnswerImg(correspondingImage){ //função para alterar estado das imagens após resposta
    setImages([...images, correspondingImage]);// pega o que tem em imagem e acrescenta a nova imagem correspondente a resposta, inicia como array zerada pois nenhuam resposta foi computada.
    setAnswerImg(correspondingImage);//novo estado da imagem correspondente a resposta
  }
  
  return (
    <li className="answer">
      <div className="answer-value">
        <span className="text">{answer}</span>
      </div>
      <div className="options">
        <div className="close" onClick={() => {options(); stateAnswer("whrong"); stateAnswerImg("close")}} >Não lembrei</div>
        <div className="help" onClick={() => {options(); stateAnswer("notYet"); stateAnswerImg("help")}}>Quase não lembrei</div>
        <div className="checkmark" onClick={() => {options(); stateAnswer("right"); stateAnswerImg("checkmark")}}>Zap!</div>
      </div>
    </li>
  );
}

