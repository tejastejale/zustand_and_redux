import React from "react";
import Navbar from "./navbar/Navbar";

function Index({ component }) {
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default Index;
