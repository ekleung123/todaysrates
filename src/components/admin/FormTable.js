import { RotatingLines } from 'react-loader-spinner';
import FormRow from "./FormRow";

export default function FormTable(props){
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <td className="tableTopRow">
            { !props.currencyData && 
              <RotatingLines 
                strokeColor="grey" strokeWidth="5" width="50" visible={true} 
              /> 
            }
          </td>
          <td className="tableLabel tableTopRow">We Buy</td>
          <td className="tableLabel tableTopRow">We Sell</td>
          <td className="tableLabel tableTopRow" style={{textAlign: "center"}}>
            Show?
          </td>
        </tr>   
        { props.currencyData && props.currencyData.map((val, index) => (
          <FormRow 
            key={val.id} 
            index={index} 
            currency={val} 
            errorArray={props.errorArray} 
            reviseData={props.reviseData} 
          />
        )) }
      </tbody>
    </table> 
  );
};