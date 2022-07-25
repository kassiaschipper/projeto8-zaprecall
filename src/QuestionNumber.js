import "./assets/css/reset.css";
import "./assets/css/style.css";

export default function QuestionNamber({index, setFlashCardState}) {
    function showQuestion(){
        setFlashCardState("question")
     }
    
    return(                
         <li>
            <span className="questionNumber">Pergunta {index} 
            <ion-icon name="play-outline" onClick={showQuestion}></ion-icon></span>            
         </li>
        
       
    );
}