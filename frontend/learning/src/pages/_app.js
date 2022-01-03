import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

import Navbar from "../components/NavBar";

function LearningApp({ Component, pageProps, reduxStore }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default LearningApp;
