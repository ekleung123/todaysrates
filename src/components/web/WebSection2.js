import { useState } from "react";

import Calculate from "../../hooks/Calculate";
import CalcReply from "./CalcReply";
import WebTop from "./WebTop";
import Section_Sell from "./Section_Sell";
import Section_Buy from "./Section_Buy";

export default function WebSection2(props){

  const [sellCurrency, setSellCurrency] = useState("HKD");
  const [buyCurrency, setBuyCurrency] = useState("NIL");
  const [calcReply, setCalcReply] = useState("");
  const [calcReplyColor, setCalcReplyColor] = useState("white");
  const [amount, setAmount] = useState(0);

  const setSell = val => {
    setSellCurrency(val.target.value);
    (val !== "HKD") ? setBuyCurrency("HKD") : setBuyCurrency("");
  };

  const setBuy = val => setBuyCurrency(val.target.value);

  const submitForm = () => {
    let x = Calculate(amount, sellCurrency, buyCurrency, props.data);
    setCalcReply(x.msg);
    setCalcReplyColor(x.color);
  };

  const resetForm = () => {
    setAmount(0); 
    setSellCurrency("HKD"); 
    setBuyCurrency("NIL");
    setCalcReply("");
    setCalcReplyColor("white");
  };

  return (
    <div className="col-md-8">
      <div className="h-20 p-4 bg-light border rounded-3">   
        <div style={{display: "flex"}}>
          <WebTop />
        </div>
        <div className="calc_sell_section">
          <Section_Sell 
            setAmount={setAmount} 
            amount={amount}
            data={props.data} 
            changeCurr={setSell} 
            sellCurrency={sellCurrency}
          />
        </div>
        <div className="calc_buy_section">
          <Section_Buy 
            data={props.data}
            changeCurr={setBuy}
            sellCurrency={sellCurrency}
            buyCurrency={buyCurrency}
          />
        </div>
        <div className="calc_button_section">
          <button onClick={submitForm}>Submit</button> &nbsp; 
          <input type="reset" value="Reset" onClick={resetForm} />
        </div>    
        <div 
          className="calcReply" 
          style={{backgroundColor: calcReplyColor}}
        >    
          { calcReply && <CalcReply text={calcReply} color={calcReplyColor} /> }
        </div>
      </div>
    </div>
  );
};