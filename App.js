import React from "react";
import Student from "./components/student";
import "./components/student";

export default function App() {
  return (
    <div className="App">
      <h1 className="mainHeading"> Leaders Board </h1>
      <Student name="Obaid Ur Rehman" university="FAST National University" score={348}/>
      <Student name="Shahzaib Alam" university="FAST National University" score={345}/>
      <Student name="Wania Rehman" university="NED University" score={342}/>
    </div>
  );
}
