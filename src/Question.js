import "./assets/css/reset.css";
import "./assets/css/style.css";
import setinha from "./assets/images/setinha.png";

export default function Question({ question, setFlashCardState }) {
  function showAnswer() {
    setFlashCardState("answer")
    }
  return (
    <li className="question">
        <div className="question-value"><span >{question}</span></div>
        <div className="turn"><img  src={setinha} onClick={showAnswer} /></div>
    </li>
  );
}
