import logo from "../../assets/logo.png";

export default function Banner(props){
  return (
    <header 
      className="pb-2 mb-4 border-bottom border-primary"
      style={{backgroundColor: "orange"}}
    >
      <p className="web_header">
        <img src={logo} className="logo_web" /> Main Street Foreign Exchange 
      </p>
  </header>
  );
};