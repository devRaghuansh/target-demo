import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  row: {
    width: "100%",
    clear: "both",
    "& img": {
      width: "100%",
      display: "block",
    },
    "& a": {
      display: "block",
    },
  },
  coll: {
    width: "100%",
    clear: "both",
    position: "relative",
  },
  con: {
    position: "absolute",
    top: "50%",
    color: "#fff",
    transform: "translateY(-50px)",
    left: "35px",
    "& h3": {
      fontSize: "45.6211px",
      fontWeight: "bold",
      marginBottom: "0.2em",
    },
    "& p": {
      paddingRight: "47%",
      fontWeight: "normal",
      lineHeight: "1.15",
      fontSize: "162%",
    },
  },
});

const Brand = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Link href="#">
        <Box className={classes.coll}>
          <Box className={classes.img}>
            <img
              src="./img/dealoftheday.webp"
              alt="a"
            />
          </Box>
          <Box className={classes.con}>
            <Typography variant="h2">Fun gifts</Typography>
            <Typography>Give them toys from top brands.</Typography>
          </Box>
        </Box>
      </Link>
      <Link href="#" style={{ marginTop: "44px" }}>
        <Box>
          <img src="./img/explore.jpg" alt="aa" />
        </Box>
      </Link>
    </Box>
  );
};

export default Brand;
