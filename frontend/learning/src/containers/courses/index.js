import { useEffect, useState } from "react";

import { CourseCard } from "../../components/Cards";

import Button from "react-bootstrap/Button";
import Modal from "../../components/Modal";
import { itemsCourse } from "../../utils/constants";
import Main from "../main";

import { courseEndpoint } from "../../utils/constants";

const CoursePage = ({ ...props }) => {
  const [courses, setCourses] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const groupButtons = () => (
    <>
      <Button variant="outline-primary" onClick={() => getCourses(setCourses)}>
        Refrescar
      </Button>
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>
        Cargar Curso
      </Button>
      <Modal
        title="Crear Curso"
        endPoint={endPoint}
        show={modalShow}
        items={itemsCourse}
        onHide={() => setModalShow(false)}
      ></Modal>
    </>
  );

  useEffect(() => getCourses(setCourses), []);

  return (

    <Main groupButtons={groupButtons}></Main>
  );
};

export default CoursePage;
