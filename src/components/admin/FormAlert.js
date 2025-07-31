export default function FormAlert(props){
  let r = props.dataChangedStatus;
  return (
    <div className={(r === "saved") ? "formAlert_black" : "formAlert_red" } >
      <p className="alertMsg">
      { (r === "unsaved") ? "Status: Your changes have not been saved" : null }
      { (r === "saved") ? "Status: Your changes are saved" : null }
      { (r === "alert") ? "ERROR: Buy rate cannot exceed sell rate.  See below." : null }
      { (r === "minimum") ? "ERROR: There needs at least ten currenices marked 'Show'." : null }
      { (r === "blank") ? "ERROR: Please make sure there are no blank fields." : null }
      </p>
    </div>
  );
};