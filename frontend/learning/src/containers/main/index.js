import Container from "react-bootstrap/Container";

const Main = ({ groupButtons, items }) => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center gap-3">
      <div className="w-100 d-flex justify-content-evenly"></div>
      <div>
        {items?.map((course) => (
          <div></div>
        ))}
      </div>
    </Container>
  );
};

export default Main;
