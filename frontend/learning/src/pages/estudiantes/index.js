import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "../../components/Modals";

const endPoint = "/students";

const getStudents = async (setStudents) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endPoint);
  const data = await response.json();
  if (Array.isArray(data)) setStudents(data);
  console.log("fetching students: ", data);
};

const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const itemsStudents = [
    {
      label: "Nombre del estuudiante",
      type: "text",
      placeholder: "",
      required: 1,
    },
  ];

  useEffect(() => getStudents(setStudents), []);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center gap-3">
      <div className="w-100 d-flex justify-content-between">
        <Button
          variant="outline-primary"
          onClick={() => getStudents(setStudents)}
        >
          Refrescar
        </Button>
        <Button variant="outline-primary" onClick={() => setModalShow(true)}>
          Cargar Estudiante
        </Button>
        <Modal
          title="Cargar estudiante"
          endPoint={endPoint}
          show={modalShow}
          items={itemsStudents}
          onHide={() => setModalShow(false)}
        ></Modal>
      </div>
      {students?.map((student) => (
        <Card style={{ alignSelf: "center", width: "100%" }}>
          <Card.Img variant="top" src="/student.png" className="p-5"/>
          <Card.Body className="h-100 w-100 p-5">
            <Card.Title className="text-center">{student.name}</Card.Title>
            <Card.Text className="text-center">{student.duration}</Card.Text>
            <Card.Text className="text-center">
              {student.start_date}
            </Card.Text>
            <Card.Text className="text-center">
              {student.student_id}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default StudentPage;
