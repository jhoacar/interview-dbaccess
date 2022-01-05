import Card from "react-bootstrap/Card";

const StudentCard = ({ student, ...props }) => {
  return (
    <Card className="d-grid">
      <Card.Img variant="top" src="/student.png" className="p-3" />
      <Card.Body className="h-100 w-100 p-5">
        <Card.Title className="text-center">{student.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
