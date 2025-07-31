export default function Calc_All(props){

  let x = props.data.filter(val => {
    return (val.active === true);
  });

  return (
    <select onChange={ e => props.changeCurr(e) } value={props.sellCurrency}>
      <option value="HKD">Hong Kong dollars</option>
      { x.map(val => (          
        <option value={val.id} key={val.id}>{val.name}</option>
      )) }
    </select>
  );
};