import "./assets/css/reset.css";
import "./assets/css/style.css";
import logo from "./assets/images/logo.png";

export default function WelcomeScreen({changeScreen, setChangeScreen}){
              
    return (
        <div className="container-wellcome-screen">
            <img className="logo" src={logo}/>
            <span className="gameTittle">ZapRecall</span>
            <button className="startButton" onClick={() => {setChangeScreen(!changeScreen)} }>Iniciar Recall!</button>
        </div>
    );
}

