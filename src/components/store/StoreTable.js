export default function StoreTable(props){
  let filteredData = props.data.filter(val => {return (val.active === true)});
  
  return (
    <>
      <table className="table store">
        <thead>
          <tr>
            <td className="storeTableHeader"></td>
            <td className="storeTableHeader">&nbsp;We Buy</td>
            <td className="storeTableHeader">&nbsp;We Sell</td>
          </tr>
        </thead>
        <tbody className="store">
        { filteredData.map(val => (
          <tr key={val.id}>
            <td className="countryCol">
              <img 
                src={`https://www.ekleung123.com/images/todaysrates/${val.id}.png`} className="flagCircle" 
                alt="flag"
              /> 
              {val.country}
            </td>
            <td style={{verticalAlign: "middle"}}>{val.buy}</td>
            <td style={{verticalAlign: "middle"}}>{val.sell}</td>
          </tr>
        )) 
        }
        </tbody>
      </table> 
    </>
  );
};