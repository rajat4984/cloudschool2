import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./global.scss";
import CardPage from "./components/CardPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import StudentDashboard from "./components/StudentDashboard";
import CourseInfo from "./components/CourseInfo";

function App() {
  const [loginInfo, setLoginInfo] = useState("");
  const [student, setStudent] = useState([]);

  return (
    <div className="App">
      <Navbar setLoginInfo={setLoginInfo} />
      <Routes>
        <Route
          path="/"
          element={
            <Login
              loginInfo={loginInfo}
              setStudent={setStudent}
              setLoginInfo={setLoginInfo}
            />
          }
        />
        <Route path="students" element={<CardPage loginInfo={loginInfo} />} />
        <Route
          path="studentDashboard"
          element={<StudentDashboard student={student} />}
        />
        <Route
          path="studentDashboard/courses"
          element={<CourseInfo student={student} />}
        />
      </Routes>
    </div>
  );
}

export default App;
