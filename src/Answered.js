export default function Answered({answerImg, index}){
        const answerIcon = answerImg+ "-circle"; //constante para mudar o icone dependendo da resposta
           
    return (
        <li>
            <span className= {`questionNumber icone-${answerImg}`}>Pergunta {index}
            <ion-icon name={answerIcon}></ion-icon></span>
        </li>
    )
}