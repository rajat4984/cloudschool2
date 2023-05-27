import React from "react";
import Student from "./student/Student";
import Staff from "./staff/Staff";

function CardPage({ loginInfo }) {
  return <div>{loginInfo === "student" ? <Student /> : <Staff />}</div>;
}

export default CardPage;
