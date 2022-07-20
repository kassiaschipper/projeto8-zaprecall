export default function FlashCards() {
  let closedFlashCards = [
    { question: "Pergunta 1" },
    { question: "Pergunta 2" },
    { question: "Pergunta 3" },
    { question: "Pergunta 4" },
  ];

  return (
    
    <div className="container-flashCards">
        <div className="header">
            <img className="logo-header" src="assets/imagens/logo.png" />
            <h1 className="title-header">ZapRecall</h1>
        </div>
        {closedFlashCards.map(value => (
            <div className="questions">
            <ul>
                <li className="question">
                    {value.question}
                    <ion-icon name="play-outline"></ion-icon>
                </li>
            </ul>            
        </div>
        ))}
        <div className="footer">

        </div>
    </div>
  );
}

// closedFlashCards.map((value) => {
//   <>
//     <div className="title">Seu titulo aquiA</div>
//     <img src="assets/imagens/logo.png" />
//     <div className="questions">
//       <div>{value.question}teste</div>
//     </div>
//   </>;
// });


// export default function Story() {

//     const storie = [
//         { urlImg: "assets/img/9gag.svg", pagina: "9gag" },
//         { urlImg: "assets/img/meowed.svg", pagina: "meowed" },
//         { urlImg: "assets/img/barked.svg", pagina: "barked" },
//         { urlImg: "assets/img/nathanwpylestrangeplanet.svg", pagina: "nathanwpylestrangeplanet" },
//         { urlImg: "assets/img/wawawicomics.svg", pagina: "wawawicomics" },
//         { urlImg: "assets/img/respondeai.svg", pagina: "respondeai" },
//         { urlImg: "assets/img/filomoderna.svg", pagina: "filomoderna" },
//         { urlImg: "assets/img/memeriagourmet.svg", pagina: "memeriagourmet" }
//     ];

//     return (
//         <>
//             {storie.map(value => (
//                 <div class="story">
//                     <div class="imagem">
//                         <img src={value.urlImg} />
//                     </div>
//                     <div class="usuario">
//                         {value.pagina}
//                     </div>
//                 </div>))
//             }</>);
// }

