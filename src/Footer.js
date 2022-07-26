import React from "react";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import party from "./assets/images/party.png";
import sad from "./assets/images/sad.png";

export default function Footer({ images }) {
  let maxLengthImages = images.length;
  let message = "";

  function FinalScore() {
    if (images.length === 4) {
      if (images.includes("close")) {
        return (
          <div className="final-message">
            <div className="reaction sad">
              <img src={sad} />
              Putz...
            </div>
            <span className="text-reaction">
              Ainda faltam alguns... {"\n"} Mas não desanime!
            </span>
          </div>
        );
      } else {
        return (
          <div className="final-message">
            <div className="reaction happy">
              <img src={party} />
              Parabéns...
            </div>
            <span className="text-reaction">
              Você não esqueceu de{"\n"} nenhum flashcard!!
            </span>
          </div>
        );
      }
    }
    return <span></span>;
  }

  return (
    <div className="footer">
      <FinalScore />
      <span className="completed-flahscards">
        {maxLengthImages}/4 CONCLUÍDOS
      </span>
      <div>
        {images.map((value, index) => {
          const answerIcon = value + "-circle";
          return (
            <span key={index} className={`showIcons-${value}`}>
              <ion-icon name={answerIcon} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
