import Card from "react-bootstrap/Card";

const StudentCard = ({ student, ...props }) => {
  return (
    <Card style={{ alignSelf: "center", width: "100%" }}>
      <Card.Img variant="top" src="/student.png" className="p-5" />
      <Card.Body className="h-100 w-100 p-5">
        <Card.Title className="text-center">{student.name}</Card.Title>
        <Card.Text className="text-center">{student.duration}</Card.Text>
        <Card.Text className="text-center">{student.start_date}</Card.Text>
        <Card.Text className="text-center">{student.student_id}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
