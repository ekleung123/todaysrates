import checkmark from "../../assets/checkmark.png";
import redx from '../../assets/redx.png'

export default function CalcReply(props){
  return (
    <>
      <div>
        <img 
          src={(props.color === "Pink") ? redx : checkmark} 
          align="left" 
          className="calcReplyIcon"
        />
      </div>
      <div>
        <span style={{padding: "0px 0px", whiteSpace: "pre-wrap"}}>
          {props.text}
        </span>
      </div>
    </>
  );
};