import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import icon_admin from "../../assets/icon_admin.png"; 
import icon_web from "../../assets/icon_web.png"; 
import icon_store from "../../assets/icon_store.png";  

export default function NavBar(props){
  const location = useLocation();

  let adminLink, storeLink, webLink;
  if (location.pathname === "/") adminLink = true;
  if (location.pathname === "/store") storeLink = true;
  if (location.pathname === "/web") webLink = true;

  return (
    <>
      <ul className="nav nav-tabs" style={{backgroundColor: "white"}}>
        <li className="nav-item">
          <div className={adminLink ? "nav-link active" : "nav-link"}>
            <img src={icon_admin} alt="admin" className="navIcon" />
            <Link to="/" className={adminLink ? "activePage" : null}>
              Admin Panel
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className={storeLink ? "nav-link active" : "nav-link"}>
            <img src={icon_store} alt="store" className="navIcon" />
            <Link to="/store" className={storeLink ? "activePage" : null}>
              Store View
            </Link>
          </div> 
        </li>
        <li className="nav-item">
          <div className={webLink ? "nav-link active" : "nav-link"}>
            <img src={icon_web} alt="web" className="navIcon" />
            <Link to="/web" className={webLink ? "activePage" : null}>
              Web View
            </Link>
          </div> 
        </li>
      </ul>
    </>
  );
};