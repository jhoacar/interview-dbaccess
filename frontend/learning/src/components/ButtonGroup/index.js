import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "../Modal";

const GroupButtons = ({ titleModal="titulo",itemsModal=[],endPointPost, refreshItems, ...props }) => {
  
  const [modalShow,setModalShow] = useState(false);
  
  return (
    <div className="w-100 gap-3 d-flex align-items-center justify-content-evenly" {...props}>
      <Button size="lg" variant="outline-primary" onClick={() => refreshItems()}> Refrescar </Button>
      <Button size="lg" variant="outline-primary" onClick={() => setModalShow(true)}>Cargar Curso</Button>
      <Modal title={titleModal} endPoint={endPointPost} show={modalShow} items={itemsModal} onHide={() => setModalShow(false)} />
    </div>
  );
};
export default GroupButtons;
