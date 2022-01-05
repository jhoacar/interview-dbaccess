import Card from "react-bootstrap/Card";



const CourseCard =  ({course, ...props})=>{
    
    return (
        <Card style={{ alignSelf: "center", width: "100%" }} {...props}>
          <Card.Img variant="top" src="/course.png" className="p-5"/>
          <Card.Body className="h-100 w-100 p-2">
            <Card.Title className="text-center">{course.name}</Card.Title>
            <Card.Text className="text-center">{course.duration}</Card.Text>
            <Card.Text className="text-center">{course.start_date}</Card.Text>
            <Card.Text className="text-center">
              {course.instructor_id}
            </Card.Text>
          </Card.Body>
        </Card>
    );
};

export default CourseCard;