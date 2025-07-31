export default function FormInput(props){
  return (
    <td>
      <input 
        value={props.value} 
        onChange={e => props.changeField(props.type, e.target.value)} 
        onBlur={props.leftInput}
        // className="textField"
        className={props.active ? "textField" : "textField_faded"}
        size={14}
      />
    </td>
  );
};