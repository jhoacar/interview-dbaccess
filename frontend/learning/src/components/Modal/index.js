import Modal from "react-bootstrap/Modal";

import { useState } from "react";
import Form from "../Form";

const CustomModal = ({ title, items, endPoint, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center"> {title} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form items={items} endPoint={endPoint}></Form>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
