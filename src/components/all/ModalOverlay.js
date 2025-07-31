import pointer from "../../assets/pointer.png";

export default function ModalOverlay(props){
  return (
    <div>
      <div style={{display: "flex"}}>
        <div style={{marginRight: 5}}>
          <img src={pointer} style={{height: 60, width: 60}} />
        </div>
        <div>
          <p>Please immediately click on "Store View" at the top of this page to see what this control panel controls.</p>
        </div>
      </div>
      <div>
        <div style={{float: "right"}}>
          <button 
            onClick={props.onClose} 
            className="btn btn-primary" 
            style={{backgroundColor: "#34749E"}}
          >
            Yes, I will
          </button>
        </div>
      </div>
    </div>
  );
};