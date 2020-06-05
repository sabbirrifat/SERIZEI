import React from "react";
import Header from "../components/views/Header/Header";
import Footer from "../components/views/Footer/Footer";

const NotFound = () => (
  <>
    <Header mode={true} />
    <div
      style={{
        textAlign: "center",
        fontSize: "56px",
        marginBottom: "20%",
        marginTop: "10%",
      }}
    >
      Whoooops ... nothing found here...
    </div>
    <Footer />
  </>
);

export default NotFound;
