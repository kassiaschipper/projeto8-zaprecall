import "./assets/css/reset.css";
import "./assets/css/style.css";
import logo from "./assets/images/logo.png";

export default function Header() {
  return (
    <div className="header">
      <img className="logo-header" src={logo} />
      <h1 className="title-header">ZapRecall</h1>
    </div>
  );
}
