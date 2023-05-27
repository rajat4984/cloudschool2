import { Box, Typography } from "@mui/material";
import React from "react";
import BackpackIcon from "@mui/icons-material/Backpack";
import { Link } from "react-router-dom";

function Navbar({ setLoginInfo }) {
  return (
    <Box
      sx={{
        backgroundColor: "#3f51b5",
        height: "65px",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: "1em",
      }}
    >
      <Typography variant="h4">
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
          onClick={()=>setLoginInfo("")}
        >
          Cloud School
          <BackpackIcon />{" "}
        </Link>
      </Typography>
    </Box>
  );
}

export default Navbar;
