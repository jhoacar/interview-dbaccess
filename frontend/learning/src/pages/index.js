import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Card style={{ alignSelf:"center", width: "100%" }}>
        <Card.Img variant="top" src="/course.png" />
        <Card.Body className="h-100 w-100 p-5">
          <Card.Title className="text-center">Cursos Disponibles</Card.Title>
          <Card.Text className="text-center">
            Mira los ultimos cursos
          </Card.Text>
          <Link href="/cursos"><Button className="text-center w-100 h-50" variant="primary">Visualizar</Button></Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Home;
