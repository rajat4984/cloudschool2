import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import studentData from "../data/studentData.json";

function Login({ setLoginInfo, setStudent }) {
  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let email = data.get("email");
    const password = data.get("password");

    const index = email.indexOf("@");
    email = email.slice(0, index);

    const studentMail = studentData.filter((item) => {
      return email === item.name;
    });
    console.log(studentMail);

    if (email === "teacher" && password === `${email}Password`) {
      setLoginInfo("student");
      navigation("/students");
    } else if (email === "faculty" && password === `${email}Password`) {
      setLoginInfo("staff");
      navigation("/students");
    } else if (
      studentMail.length != 0 &&
      password === `${studentMail[0].name}Password`
    ) {
      setStudent(studentMail);
      navigation("/studentDashboard");
    }
  };

  return (
    <Box
      sx={{
        marginTop: "2em",
        padding: "2em",
        borderRadius: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        boxShadow: "-1px 1px 14px -2px rgba(0,0,0,0.75)",
        backgroundColor:"white"
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "red" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h6">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            sx={{ width: 300 }}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            sx={{ width: 300 }}
            autoComplete="current-password"
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: 200 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
