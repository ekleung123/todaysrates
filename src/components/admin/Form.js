import { useState, useEffect, useContext} from "react";
import { AuthContext } from "../../context/AuthContext";

import FormTable from "./FormTable";
import FormAlert from "./FormAlert";
import exclaimImg from "../../assets/exclaim.png";

export default function Form(props){
  const [updatedData, setUpdatedData] = useState();
  const [dataChangedStatus, setDataChangeStatus] = useState(null); 
  const [errorArray, setErrorArray] = useState([]);
  const [oldData, setOldData] = useState();

  const store = useContext(AuthContext);

  useEffect(() => {
    setUpdatedData(props.currencyData);
    let arr = structuredClone(store.contextData);
    setOldData(arr);
  }, [props.currencyData]);

  const reviseData = (index, type, val) => { 
    const newArray = [...updatedData];
    newArray[index][type] = val;
    let x = "unsaved";
    
    if (JSON.stringify(newArray) === JSON.stringify(oldData)) x = null;
    // If user makes changes and then reverts, this prevents a message saying
    // the form hasn't been saved.
    
    console.log("Old Array", oldData);
    console.log("New Array", newArray);
    setUpdatedData(newArray);
    setDataChangeStatus(x);
  };

  const formSubmit = () => {

    // If we haven't gotten data from database yet, don't submit

    if (!props.currencyData) return;

    // Check if any buy rates exceed its corresponding sell rate

    let z = updatedData.filter(val => { 
      return (Number(val.buy) > Number(val.sell))
    });

    if (z.length > 0) {
      setDataChangeStatus("alert");
      setErrorArray(z);
      return;
    };

    // Check if any fields are blank

    let q = updatedData.filter(val => { 
      if ((val.buy).length < 1) return true;
      if ((val.sell).length < 1) return true;
      return false;
    });

    if (q.length > 0) {
      setDataChangeStatus("blank");
      setErrorArray(q);
      return;
    };

    // Check if there are less than 10 currencies marked as 'active'

    let t = updatedData.filter(val => { return val.active === true });
    if (t.length < 10) {
      setDataChangeStatus("minimum");
      return
    }

    // If no error, submit
    
    props.submitForm(updatedData);
    setDataChangeStatus("saved");
    setErrorArray([]);
  };

  return (
    <>
      <div style={{display: "flex"}}>
        <div>
          <button className="btn btn-primary" onClick={formSubmit}>
            Save Changes
          </button>
        </div>
          <FormAlert dataChangedStatus={dataChangedStatus} />
      </div> 
      <p className="formInstructions">
        <img src={exclaimImg} alt="exclaimation" className="formImg" />
          Each field can only contain a maximum of five digits.&nbsp; The buy rate 
          must be lower than the sell rate.
      </p>
      <FormTable 
        currencyData={props.currencyData} 
        errorArray={errorArray} 
        reviseData={reviseData} 
      />
    </>
  );
};