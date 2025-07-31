import CalcNoHKD from "./calc_options/noHKD";
import CalcOnlyHKD from "./calc_options/onlyHKD";

export default function Section_Buy(props){
  return (
    <>
      <h5><b>What do you want to buy?</b></h5>          
        { 
          (props.sellCurrency === "HKD") ? 
          <CalcNoHKD 
            changeCurr={props.changeCurr} 
            data={props.data} 
            buyCurrency={props.buyCurrency}
          /> : <CalcOnlyHKD />
        }      
        {
          (props.sellCurrency !== "HKD") && <p className="buyMsg">
            (We can only offer HKD for foreign banknotes)
          </p>
        }  
    </>
  );
};