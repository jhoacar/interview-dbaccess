import Card from "react-bootstrap/Card";

const InstructorCard = ({ instructor, ...props }) => {
  return (
    <Card style={{ alignSelf: "center", width: "100%" }}>
      <Card.Img variant="top" src="/instructor.png" className="p-2" />
      <Card.Body className="h-100 w-100 p-0">
        <Card.Title className="text-center">{instructor.name}</Card.Title>
        <Card.Text className="text-center">{instructor.duration}</Card.Text>
        <Card.Text className="text-center">{instructor.start_date}</Card.Text>
        <Card.Text className="text-center">
          {instructor.instructor_id}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InstructorCard;
