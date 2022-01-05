import Card from "react-bootstrap/Card";

const InstructorCard = ({ instructor, ...props }) => {
  return (
    <Card className="d-grid">
      <Card.Img variant="top" src="/instructor.png" className="p-3" />
      <Card.Body className="h-100 w-100 p-0">
        <Card.Title className="text-center">{instructor.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default InstructorCard;
