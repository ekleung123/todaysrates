import CalcAll from "../web/calc_options/all";

export default function Section_Sell(props){
  return (
    <>
      <h5><b>What do you have to sell?</b></h5>
      <input 
        size={10} 
        onChange={e => props.setAmount(e.target.value)} 
        value={props.amount}
        style={{marginBottom: 5}}
      /> Amount <br />
      <CalcAll 
        data={props.data} 
        changeCurr={props.changeCurr} 
        sellCurrency={props.sellCurrency}
      />
    </>
  );
};