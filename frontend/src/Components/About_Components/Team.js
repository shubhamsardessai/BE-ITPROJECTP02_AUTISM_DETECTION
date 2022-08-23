import * as React from "react";

import Grid from "@mui/material/Grid";
import "../../Styles/about.css";

import ayaan from "../../imgs/ayaan.jpg";
import atisha from "../../imgs/atisha.jpg";
import akruti from "../../imgs/akruti.jpg";
import pawan from "../../imgs/pawan.jpg";
import saptak from "../../imgs/saptak.jpg";
import shubham from "../../imgs/shubham.jpg";

const Team = () => {
  return (
    <div className="team">
      <h1>Our Team</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img className="item" src={ayaan}></img>
          <h3>Ayaan</h3>
        </Grid>
        <Grid item xs={4}>
          <img className="item" src={atisha}></img>
          <h3>Atisha</h3>
        </Grid>
        <Grid item xs={4}>
          <img className="item" src={akruti}></img>
          <h3>Akruti</h3>
        </Grid>
        <Grid item xs={4}>
          <img className="item" src={pawan}></img>
          <h3>Pawan</h3>
        </Grid>
        <Grid item xs={4}>
          <img className="item" src={saptak}></img>
          <h3>Saptak</h3>
        </Grid>
        <Grid item xs={4}>
          <img className="item" src={shubham}></img>
          <h3>Shubham</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default Team;
