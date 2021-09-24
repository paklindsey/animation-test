import React, { useEffect, useRef } from "react";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    overflow: "hidden",
  },
  textCont: {
    flexWrap: "nowrap",
    width: "300vw",
    marginLeft: "25vw",
  },
  text: {
    fontSize: "20rem",
    fontFamily: "Montserrat",
    fontWeight: 600,
  },
}));

const Ani2 = () => {
  const classes = useStyles();
  let textRef = useRef(null);

  useEffect(() => {
    console.log(textRef.scrollWidth);
    const width = textRef.scrollWidth;
    gsap.to(textRef, {
      x: -width,
      scrollTrigger: {
        trigger: textRef,
        scrub: 1,
        pin: true,
        // markers: true,
        start: "top center",
        end: "top top",
      },
    });
  }, [textRef]);

  return (
    <Grid container className={classes.wrapper}>
      <Grid justifyContent="flex-start" alignItems="center" container>
        <Grid
          ref={(el) => {
            textRef = el;
          }}
          item
          id="textCont"
          className={classes.textCont}
        >
          <Typography
            className={classes.text}
            style={{
              fontSize: "20rem",
              fontFamily: "Montserrat",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            i am a realllllllyyyyyyyyyy long piece of text .
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Ani2;
