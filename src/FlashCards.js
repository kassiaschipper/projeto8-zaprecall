import Header from "./Header";
import Footer from "./Footer";
import FlashCard from "./Flashcard";

export default function FlashCards() {
  
  const flahscardsDeck = [
    {question: "O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
    {question:"O React é __ ", answer:"Uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __ ", answer:"Letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", answer:"Expressões"},
    {question:"O ReactDOM nos ajuda __ ", answer:"Interagindo com a DOM para colocar componentes React na mesma"},
    {question:"Usamos o npm para __ ", answer:"Gerenciar os pacotes necessários e suas dependências"},
    {question:" Usamos props para __ ", answer:"Passar diferentes informações para componentes"},
    {question:"Usamos estado (state) para __ ", answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
  ];

  function shuffleFlahscardsDeck(cards){
    for (let index = cards.length -1; index > 0; index--){
      /*Escolhendo elemento aleatório*/
      const j = Math.floor(Math.random() * (index+1));
      /*Reposicionado elemento*/
      [cards[index], cards[j]] = [cards[j], cards[index]]
    }
  }

  shuffleFlahscardsDeck(flahscardsDeck);

  // let closedFlashCards = [
  //   { question: "Pergunta 1" },
  //   { question: "Pergunta 2" },
  //   { question: "Pergunta 3" },
  //   { question: "Pergunta 4" },
  // ];
  
 
  return (
    
    <div className="container-flashCards">
        <Header />
            
            <div className="questions">
            <ul> 
              {flahscardsDeck.map((value, index) => (
                <FlashCard />
              ))}
           </ul>            
        </div>
        

        <Footer />
    </div>
  );
}

/*/{flahscardsDeck.map((value, index) => (<li key={index} className="question">
{value.question}
<ion-icon name="play-outline" onClick={() => alert("teste")}></ion-icon>
</li>))}*/ 