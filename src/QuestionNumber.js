
export default function QuestionNamber({index, SetFlahscardState}) {
    function showQuestion(){
        SetFlahscardState("question")
        alert("mostra pergunta")
    }
    
    return(                
         <li>
            <span className="questionNumber">Pergunta {index+1} 
            <ion-icon name="play-outline" onClick={showQuestion}></ion-icon></span>            
         </li>
        
       
    );
}