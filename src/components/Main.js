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
  header: {
    width: "75%",
  },
  h1: {
    fontFamily: "Montserrat",
    fontWeight: 800,
    textAlign: "center",
  },
  img: {
    height: "50vh",
    position: "absolute",
  },
}));

const Main = () => {
  const classes = useStyles();
  let textRef = useRef(null);
  let imgRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef, {
      y: "-200px",
      ease: Power3,
      scrollTrigger: {
        trigger: textRef,
        scrub: 1,
        start: "top 75%",
        end: "top center",
      },
    });
    gsap.to(imgRef, {
      y: "200px",
      ease: Power3,
      scrollTrigger: {
        trigger: imgRef,
        scrub: 1,
        //   markers: true,
        start: "top 75%",
        end: "top center",
      },
    });
  }, [textRef]);

  return (
    <Grid container justifyContent="center" className={classes.wrapper}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "5rem" }}
      >
        <Typography
          style={{
            fontSize: "5rem",
            fontFamily: "Montserrat",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          here are some coolio scroll based animations
        </Typography>
        <Typography
          style={{
            fontSize: "1rem",
            fontFamily: "Montserrat",
            textAlign: "center",
            letterSpacing: "1px",
            fontWeight: 400,
          }}
        >
          SCROLL DOWN
        </Typography>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.header}
      >
        <Typography
          ref={(el) => {
            textRef = el;
          }}
          style={{
            fontSize: "8rem",
            fontFamily: "Montserrat",
            fontWeight: 600,
          }}
        >
          hello yello rockin jello
        </Typography>
        <img
          ref={(el) => {
            imgRef = el;
          }}
          src={jam}
          alt="jam on bread"
          className={classes.img}
        />
      </Grid>
    </Grid>
  );
};

export default Main;
