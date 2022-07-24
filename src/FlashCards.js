import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FlashCard from "./Flashcard";

export default function FlashCards() {
   
  
  const flashCardsDeck = [
    {question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
    {question:"O React é __ ", answer:"Uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __ ", answer:"Letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", answer:"Expressões"},
    {question:"O ReactDOM nos ajuda __ ", answer:"Interagindo com a DOM para colocar componentes React na mesma"},
    {question:"Usamos o npm para __ ", answer:"Gerenciar os pacotes necessários e suas dependências"},
    {question:" Usamos props para __ ", answer:"Passar diferentes informações para componentes"},
    {question:"Usamos estado (state) para __ ", answer:"Dizer para o React quais infor- mações quando atualizadas devem re-renderizar a tela"}
  ];
  
  const [images, setImages] = React.useState([]);

  function shuffleFlahscardsDeck(cards){
    for (let index = cards.length -1; index > 0; index--){
      /*Escolhendo elemento aleatório*/
      const j = Math.floor(Math.random() * (index+1));
      /*Reposicionado elemento*/
      [cards[index], cards[j]] = [cards[j], cards[index]]
    }
  }

  shuffleFlahscardsDeck(flashCardsDeck);

  const newFlashCardsDeck = [...flashCardsDeck];
  //função pra deixar o deck com somente 4 cartas, sem influenciar o array principal 
  function reduceaArray(array){
    for (let i = 0; i < 4; i++){
      array.pop()
    }
  }

  reduceaArray(newFlashCardsDeck);
  

  return (
    <div className="container-flashCards">
       <Header />
       <div className="questions">
          <ul>
            {newFlashCardsDeck.map((value, index) => (
              <FlashCard key={index} index={index+1} {...value} images={images} setImages={setImages}/>
            ))}
            
          </ul> 
       </div>
       <Footer />  
    </div>
  );
}


