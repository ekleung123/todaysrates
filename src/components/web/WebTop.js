import Calculator from "../../assets/calculator.png";   

export default function WebTop(){
  return (  
    <>
      <div>
        <img src={Calculator} style={{width: 60, height: 60}}/>
      </div>
      <div style={{marginLeft: 10}}>
        <h3>Use our calculator to see how much you'd get!</h3>
      </div>
    </>
  );
};