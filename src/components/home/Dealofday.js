import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  row: {
    width: "100%",
    clear: "both",
    marginTop: '18px',
    borderRadius: '9px',
    overflow: 'hidden',
    "& img": {
      width: "100%",
      display: "block",
    },
    "& a":{
      display:'block'
    }
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
    transform: "translateY(-50%)",
    left: "35px",
    "& h2": {
      fontSize: "56.6211px",
      fontWeight: "800",
      marginBottom: "0.2em",
      "& span":{
        fontSize: '38px',
      }
    },
    "& p": {
      fontWeight: "normal",
      lineHeight: "1.15",
      fontSize: 'clamp(12px, 1.6vw - 1px, 19px)',
      "& span":{
        display:'flex',
        "& img":{
            width: '15%',
        }
      }
    },
  },
});

const Dealofday = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Link href="#">
        <Box className={classes.coll}>
          <Box className={classes.img}>
            <img
              src="./img/GUEST_5b06d3de-be1c-408b-bfdd-bb9a69588497.jpg"
              alt="a"
            />
          </Box>
          <Box className={classes.con}>
            <Typography variant="h2">Save<Typography variant="h2"><span>$</span>5</Typography></Typography>
            <Typography>when you spend $20 on seasonal candy & snacks with <span><img src="./Slogo.svg" alt="" />+ same-day delivery or pickup </span> </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Dealofday;
