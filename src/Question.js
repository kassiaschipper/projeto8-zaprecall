export default function Question({ question, setFlashCardState }) {
  function showAnswer() {
    setFlashCardState("answer")
    }
  return (
    <li className="question">
        <div className="question-value"><span >{question}</span></div>
        <div className="turn"><img  src="../assets/imagens/setinha.png" onClick={showAnswer} /></div>
    </li>
  );
}
