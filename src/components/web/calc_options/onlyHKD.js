export default function Calc_onlyHKD(props){
  return (
    <select onChange={ e => props.changeCurr(e)}>
      <option value="HKD">Hong Kong dollars</option>
    </select>
  );
};