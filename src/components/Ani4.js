import React, { useEffect, useRef } from "react";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import chicken from "../assets/brian-chan-NbXjZomyNEM-unsplash.jpg";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  img: {
    height: "50vh",
    position: "absolute",
    zIndex: -1,
  },
}));

const Ani4 = () => {
  const classes = useStyles();
  let chickenRef = useRef(null);
  let contRef = useRef(null);
  let textRef = useRef(null);
  //   const tl = new Timeline();

  useEffect(() => {
    gsap.to(chickenRef, {
      height: "100vh",
      scrollTrigger: {
        trigger: chickenRef,
        scrub: 1,
        pin: contRef,
        // markers: true,
        start: "top center",
        end: "top top",
      },
    });
    gsap.to(textRef, {
      opacity: 1,
      scrollTrigger: {
        trigger: textRef,
        scrub: 1,
        markers: true,
        start: "top 100%",
        end: "top center",
      },
    });
  }, []);

  return (
    <Grid container className={classes.wrapper}>
      <Grid
        ref={(el) => {
          contRef = el;
        }}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          ref={(el) => {
            textRef = el;
          }}
          style={{
            opacity: 0,
            fontFamily: "Montserrat",
            fontSize: "2rem",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Do you like chicken?
        </Typography>
        <img
          ref={(el) => {
            chickenRef = el;
          }}
          src={chicken}
          alt="fried chicken"
          className={classes.img}
        />
      </Grid>
    </Grid>
  );
};

export default Ani4;
