import React, { useRef, useEffect } from "react";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import jam from "../assets/mateusz-feliksik-F8fIG15-Iew-unsplash.jpg";

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "200vh",
  },
}));

const Ani3 = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.wrapper}></Grid>
  );
};

export default Ani3;
