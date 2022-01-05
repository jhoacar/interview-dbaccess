import "bootstrap/dist/css/bootstrap.css";
//import "html-duration-picker";
import { useEffect } from "react";

import Head from "next/head";

import Navbar from "../components/NavBar";
import Container from "react-bootstrap/Container";

function LearningApp({ Component, pageProps, reduxStore }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <title>Learning - Interview DBAccess</title>
        <script src="https://cdn.jsdelivr.net/npm/html-duration-picker@latest/dist/html-duration-picker.min.js" defer></script>
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <Navbar height="150px" />
      <Container
        style={{ top: "150px" }}
        className="position-absolute start-0 end-0 d-flex justify-content-center align-items-center p-5"
      >
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default LearningApp;
