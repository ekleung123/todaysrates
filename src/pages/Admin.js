import { useGetData } from "../hooks/useGetData";
import { useUpdateData } from "../hooks/useUpdateData";

import NavBar from "../components/all/NavBar";
import Form from "../components/admin/Form";
import { dbError } from "../constants/text";

export default function Admin(){
  const {currencyData} = useGetData(); 
  const {updateData} = useUpdateData();

  const root = "https://www.ekleung123.com/images/todaysrates";

  return (
    <>
      <div style={{backgroundColor: "white"}}>
        <div>
          <NavBar title="Admin" />
        </div>
        <div style={{padding: 15}}>
          <Form currencyData={currencyData} submitForm={val => updateData(val)} />
        </div>   
      </div>
      <div style={{display: "none"}}> {/* This section is for preloading images. */}        
        { currencyData && currencyData.map(val => (
          <img key={val.id} alt="flag" src={root + "/" + val.id + ".png"} />
        )) }
      </div>   
    </>   
  );
};