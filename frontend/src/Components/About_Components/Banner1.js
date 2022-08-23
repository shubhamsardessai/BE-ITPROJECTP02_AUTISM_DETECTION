import * as React from "react";

import Grid from "@mui/material/Grid";

import banner from "../../imgs/banner.jpg";
import "../../Styles/about.css";

const Banner1 = () => {
  return (
    <div className="banner1">
      <h1 className="header-text-1">INTRODUCTION</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2 className="header-text-2">WHAT IS AUTISM?</h2>
          <p className="para" style={{ textAlign: "justify", paddingLeft: "2rem" }}>
            Autism spectrum disorder impacts the nervous system and affects the
            overall cognitive, emotional, social and physical health of the
            affected individual. The range and severity of symptoms can vary
            widely. Common symptoms include difficulty with communication,
            difficulty with social interactions, obsessive interests and
            repetitive behaviours. Early recognition, as well as behavioural,
            educational and family therapies may reduce symptoms and support
            development and learning.
            <br />
            <b> Genetics</b> Several different genes appear to be involved in
            autism spectrum disorder. For some children, autism spectrum
            disorder can be associated with a genetic disorder, such as Rett
            syndrome or fragile X syndrome. For other children, genetic changes
            (mutations) may increase the risk of autism spectrum disorder. Still
            other genes may affect brain development or the way that brain cells
            communicate, or they may determine the severity of symptoms. Some
            genetic mutations seem to be inherited, while others occur
            spontaneously.
            <br /> <b> Environmental factors</b> Researchers are currently
            exploring whether factors such as viral infections, medications or
            complications during pregnancy, or air pollutants play a role in
            triggering autism spectrum disorder.
          </p>
        </Grid>
        <Grid item lg={6}>
          <img style={{ marginTop: "13vh" }} src={banner}></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner1;
