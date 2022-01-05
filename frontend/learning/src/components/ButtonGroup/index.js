import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "../Modal";

const GroupButtons = ({ titleModal,itemsModal,endPointPost, refreshItems, ...props }) => {
  
  const [modalShow,setModalShow] = useState(false);
  
  return (
    <div {...props}>
      <Button variant="outline-primary" onClick={() => refreshItems()}> Refrescar </Button>
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>Cargar Curso</Button>
      <Modal title={titleModal} endPoint={endPointPost} show={modalShow} items={itemsModal} onHide={() => setModalShow(false)} />
    </div>
  );
};
export default GroupButtons;
