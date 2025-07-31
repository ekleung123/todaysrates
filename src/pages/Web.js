import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

import Banner from "../components/web/Banner";
import WebSection1 from "../components/web/WebSection1";
import WebSection2 from "../components/web/WebSection2";
import WebFooter from "../components/web/WebFooter";
import NavBar from "../components/all/NavBar";
import URL from "../components/web/URL";

export default function Web(props){
  const store = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => { 
    if (!store.contextData) navigate("/");
  },[]);

  return (
    <div>
      <div>
        <NavBar title="Web" />
      </div>
      <div style={{backgroundColor: "#e1e1e8"}}>
        <URL />
        <Banner />
        <div className="row align-items-md-stretch">
          <WebSection1 />
          { store.contextData && <WebSection2 data={store.contextData} />}          
        </div>
        <div style={{padding: 10}}>
          <WebFooter />
        </div>
      </div>
    </div>
  );
};