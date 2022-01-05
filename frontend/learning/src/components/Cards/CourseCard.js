import Card from "react-bootstrap/Card";
import InstructorCard from "./InstructorCard";
import {useEffect} from "react";

const CourseCard =  ({course, ...props})=>{
    useEffect(()=>console.log("Curso: ",course,course.instructor),[]);
    return (
        <Card  {...props}>
          <Card.Img variant="top" src="/course.png" className="p-3"/>
          <Card.Body className="h-100 w-100 p-2">
            <Card.Title className="text-center">{course?.name}</Card.Title>
            <Card.Text className="text-center">Duracion: {course?.duration}</Card.Text>
            <Card.Text className="text-center">Fecha: {course?.start_date}</Card.Text>
            {course?.instructor && <div className="text-center d-flex flex-column gap-3">
              <span className="display-5">Instructor</span>
              <InstructorCard instructor={course.instructor}/>
            </div>}
          </Card.Body>
        </Card>
    );
};

export default CourseCard;