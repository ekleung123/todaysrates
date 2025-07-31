import { useState } from "react";

import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import FormMessage from "./FormMessage";

export default function FormRow(props){
  
  console.log("FormRow.js", props.currency.id, props.currency.active);

  const [displayMsg, setDisplayMsg] = useState(false);

  let x = props.errorArray.filter(val => val.id === props.currency.id);
  let highlight = ((x.length > 0) ? "red" : null);

  const changeField = (type, val) => {

    if (isNaN(+val)) return; // if user inputs a non-number, then do nothing

    let x = String(val).replace(".", "");
    if (x.length > 5) {
      setDisplayMsg(true);
    } else {
      setDisplayMsg(false);
      props.reviseData(props.index, type, val);
    };
  };

  const leftInput = () => setDisplayMsg(false);

  return (
    <>
      <tr>
        <td style={{backgroundColor: highlight}}>
          <span className={props.currency.active ? "tableLabel" : "tableLabel_faded"}>
            {props.currency.country} ({props.currency.id})
          </span>
        </td>
        <FormInput 
          value={props.currency.buy}
          active={props.currency.active} 
          leftInput={leftInput} 
          type="buy" 
          changeField={changeField} 
        />
        <FormInput 
          value={props.currency.sell}
          active={props.currency.active}  
          leftInput={leftInput} 
          type="sell" 
          changeField={changeField} 
        />
        <FormCheckbox 
          isChecked={props.currency.active} 
          changeField={changeField} 
        />
      </tr>
      {displayMsg && <FormMessage />}
    </>
  );
};