import logo from "../../assets/logo.png";

export default function StoreHead(){
  return (
    <>
      <div className="storeHead">
        <img src={logo} className="logo" />Today's Rates
      </div>
    </>
  );
};