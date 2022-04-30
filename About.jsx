import React from "react";
import web from "../src/images/image-1.png";
import Common  from "./Common";
const About = () => {
    return(
      <>
        <Common name='Welcome to about page' imgsrc={web} visit="/contact" btname="Contact now"/>
      </>
    );
  };
  
  export default About;
  