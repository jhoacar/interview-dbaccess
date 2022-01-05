import Card from "react-bootstrap/Card";
import InstructorCard from "./InstructorCard";

const CourseCard =  ({course, ...props})=>{
    
    return (
        <Card  {...props}>
          <Card.Img variant="top" src="/course.png" className="p-3"/>
          <Card.Body className="h-100 w-100 p-2">
            <Card.Title className="text-center">{course?.name}</Card.Title>
            <Card.Text className="text-center">Duracion: {course?.duration}</Card.Text>
            <Card.Text className="text-center">Fecha: {course?.start_date}</Card.Text>
            <Card.Text className="text-center">
              <h2>Instructor</h2>
              <InstructorCard instructor={course?.instructor}/>
            </Card.Text>
          </Card.Body>
        </Card>
    );
};

export default CourseCard;