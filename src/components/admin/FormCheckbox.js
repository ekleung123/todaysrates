export default function FormCheckbox(props){
  return (
    <td style={{textAlign: "center"}}>
      <input 
        type="checkbox" 
        defaultChecked={props.isChecked} 
        onChange={() => props.changeField("active", !props.isChecked)}
        className="checkbox"
      />
    </td>
  )
};