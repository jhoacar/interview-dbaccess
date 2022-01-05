import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "../../components/Modals";

const endPoint = "/instructors";

const getinstructors = async (setinstructors) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endPoint);
  const data = await response.json();
  if (Array.isArray(data)) setinstructors(data);
  console.log("fetching instructors: ", data);
};

const InstructorPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const itemsInstructor = [
    {
      label: "Nombre del Instructor",
      type: "text",
      placeholder: "",
      required: 1,
    },
  ];

  useEffect(() => getinstructors(setInstructors), []);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center gap-3">
      <div className="w-100 d-flex justify-content-between">
        <Button
          variant="outline-primary"
          onClick={() => getinstructors(setInstructors)}
        >
          Refrescar
        </Button>
        <Button variant="outline-primary" onClick={() => setModalShow(true)}>
          Cargar Instructor
        </Button>
        <Modal
          title="Cargar Instructor"
          endPoint={endPoint}
          show={modalShow}
          items={itemsInstructor}
          onHide={() => setModalShow(false)}
        ></Modal>
      </div>
      {instructors?.map((instructor) => (
        <Card style={{ alignSelf: "center", width: "100%" }}>
          <Card.Img variant="top" src="/instructor.png" className="p-2"/>
          <Card.Body className="h-100 w-100 p-0">
            <Card.Title className="text-center">{instructor.name}</Card.Title>
            <Card.Text className="text-center">{instructor.duration}</Card.Text>
            <Card.Text className="text-center">
              {instructor.start_date}
            </Card.Text>
            <Card.Text className="text-center">
              {instructor.instructor_id}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default InstructorPage;
