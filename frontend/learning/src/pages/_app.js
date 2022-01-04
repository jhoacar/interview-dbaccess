import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

import Navbar from "../components/NavBar";
import Container from "react-bootstrap/Container";

function LearningApp({ Component, pageProps, reduxStore }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Navbar height="150px"/>
      <Container style={{top:"150px"}} className="position-absolute start-0 end-0 d-flex justify-content-center align-items-center p-5">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default LearningApp;
