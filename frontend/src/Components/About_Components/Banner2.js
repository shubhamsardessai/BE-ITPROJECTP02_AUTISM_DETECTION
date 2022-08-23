import * as React from "react";

import Grid from "@mui/material/Grid";
import "../../Styles/about.css";

import autism from "../../imgs/autism.jpg";

const Banner2 = () => {
  return (
    <div className="info banner2">
      <Grid container spacing={2}>
        <div className="info">
          <Grid item xs={6}>
            <img
              style={{ marginTop: "2rem", width: "45vw", height: "auto" }}
              src={autism}
            ></img>
          </Grid>
          <Grid item xs={6}>
            <p className="para1" style={{ textAlign: "justify" }}>
              India has the largest number of autistic children, and there are
              many kids that suffer with social awkwardness, anxiety and
              depression. There isn't much awareness about it amongst the people
              and it is not diagnosed at the right time. During physical
              detection the time taken is much more and such clinics not
              available in remote areas. Children having autism tend to feel
              ignored and rejected by the society.
              <br /> Presently, in India, of every 500 people, 1 person is
              diagnosed with this disease, which is about 0.2% of the entire
              population. The Rehabilitation Council of India tells us that,
              there are about 21.6 lakh people are suffering from Autism. Many
              children with autistic spectrum disorders can learn the
              fundamentals of relating, communicating and thinking. This
              requires hard work with a comprehensive treatment approach that
              focuses on each child’s individual processing differences and on
              helping the child master the basic building blocks of relating,
              communicating and thinking.
              <br />
              Helping children master these foundations is more effective at
              helping them move beyond symptoms or behaviors than focusing on
              symptoms alone. Autistic spectrum disorders should be viewed as a
              dynamic, not a static, process. When we think of a static process,
              we think of something that is fixed, no matter what the
              environment, the context, or the circumstances. Current research
              suggests that there is no single cause of autism, but rather
              multiple causes working together in a cumulative way, and multiple
              paths leading to the disorder.
            </p>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Banner2;