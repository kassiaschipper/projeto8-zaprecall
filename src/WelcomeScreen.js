export default function WelcomeScreen({changeScreen, setChangeScreen}){
              
    return (
        <div className="container-wellcome-screen">
            <img className="logo" src="assets/imagens/logo.png"/>
            <span className="gameTittle">ZapRecall</span>
            <button className="startButton" onClick={() => {setChangeScreen(!changeScreen)} }>Iniciar Recall!</button>
        </div>
    );
}

