// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import "bootstrap/dist/css/bootstrap.css";

//import withReduxStore from "../utils/with-redux-store";
import { useEffect } from "react";
//import Head from "next/head";
//import { Provider } from "react-redux";

function MyApp({ Component, pageProps, reduxStore }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
       {/* <Provider store={reduxStore}>  */}
        <Component {...pageProps} />
       {/* </Provider>  */}
    </>
  );
}

export default MyApp;
//export default withReduxStore(MyApp);
