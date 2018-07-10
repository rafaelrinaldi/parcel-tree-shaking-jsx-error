import React from "react";
import { Link } from "react-router-dom";

function* test() {
  yield "bar";
}

test();

async function thing() {
  const value = await fetch("https://work.co");
  console.log(value);
}

thing();

const About = () => (
  <React.Fragment>
    <h1>About</h1>
    <Link to="/">Home</Link>
  </React.Fragment>
);

export default About;
