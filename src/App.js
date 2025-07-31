import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Modal } from 'react-responsive-modal';

import Admin from "./pages/Admin";
import Store from "./pages/Store";
import Web from "./pages/Web";
import ModalOverlay from "./components/all/ModalOverlay";

import "./stylesheet.css";
import "./modalstyles.css";
import 'react-responsive-modal/styles.css';

export default function App() {

  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="container">
      <div className="maincontainer" style={{backgroundColor: "#dadada"}}>
        <BrowserRouter>
          <Routes>      
            <Route exact path="/" element={<Admin />} />
            <Route exact path="/store" element={<Store />} />       
            <Route exact path="/web" element={<Web />} />  
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        <Modal 
          open={open} 
          center 
          showCloseIcon={false} 
          closeOnOverlayClick={false}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
        >
          <ModalOverlay onClose={onCloseModal} />
        </Modal>
      </div>
    </div>
  );
};