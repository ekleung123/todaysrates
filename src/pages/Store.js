import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/all/NavBar";
import StoreTable from "../components/store/StoreTable";
import StoreHead from "../components/store/StoreHead";

export default function Store(){
  const store = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => { 
    if (!store.contextData) navigate("/");
  }, []);

  return (
    <div className="storeBackground">
      <div>
        <NavBar title="Store" />
      </div>
      <div style={{padding: 20}}>
        <StoreHead />
        { store.contextData && <StoreTable data={store.contextData} /> } 
      </div>
    </div>
  );
};