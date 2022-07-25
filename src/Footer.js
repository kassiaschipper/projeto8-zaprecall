export default function Footer({answerImg, images}) {
  let maxLengthImages = images.length;
  
  // function score (){
  //   if(maxLengthImages === maxLengthDeck && images.icludes("checkmark")){

  //   }
  // }

  return(
  <div className="footer">
    <span className="completed-flahscards">{maxLengthImages}/4 CONCLUÍDOS</span>
    <div>
      {images.map((value, index) => {
       const answerIcon = value + "-circle"
       return(<span className={`showIcons-${value}`} ><ion-icon key={index} name={answerIcon}/></span>)     
      })}
    </div>
  </div>);
}
