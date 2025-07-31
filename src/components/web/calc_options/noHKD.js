export default function Calc_noHKD(props){

  let x = props.data.filter(val => {
    return (val.active === true);
  });

  return (
    <select onChange={ e => props.changeCurr(e)} value={props.buyCurrency}>
      <option value="NIL">(Select below)</option>
      { x.map(val => (          
        <option value={val.id} key={val.id}>{val.name}</option>
      )) }
    </select>
  );
};