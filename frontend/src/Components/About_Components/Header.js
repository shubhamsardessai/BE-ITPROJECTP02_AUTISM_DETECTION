import * as React from "react";
import "../../Styles/about.css";

import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div className="banner-about">
      <h1 className="title">DETECTION AND CLASSIFICATION OF AUTISM</h1>
      <Button
        className="started"
        href="/survey"
        variant="contained"
        color="success"
        sx={{
          padding: "10px 20px",
          borderRadius: "15px",
          fontSize: "22px",
          width: "auto",
          marginTop: "1rem"
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Header;
