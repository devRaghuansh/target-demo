import { Box, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  row: {
    padding: "37px 34px",
    paddingBottom: " 0",
    textAlign: "center",
    width: "100%",
   
    "& h2": {
      fontWeight: "bold",
      lineHeight: "1.25",
      fontSize: "36px",
      margin: "0px 0px 19px",
    },
  },
  cart: {
    display: "block",
    textDecoration:'none !important',
    "& img": {
        width: "100%",
        display: "block",
      },
  },
  content: {
    color: "#333333",
    "& h6": {
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 1.25,
        margin: '9px 0',
      },
      "& p": {
        fontSize: 14,
        padding: '0 46px',
        lineHeight: 1.25,
      },
  },
});

const data = [
  {
    img: "./img/product-5.webp",
    name: "One-of-a-kind ways to celebrate NYE",
    disc: "From potlucks to PJs, find new ways to ring in the new year.",
  },
  {
    img: "./img/product-6.webp",
    name: "Fuel the festivities",
    disc: "Entertain with delicious food & drinks for every course.",
  },
  {
    img: "./img/product-7.webp",
    name: "Happy Hannukah!",
    disc: "Celebrate with festive decor, crafts, gifts, snacks & more.",
  },
];

const Readyholiday = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Box>
        <Typography variant="h2">Ready for the holidays</Typography>
      </Box>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={4} key={index}>
            <Link href="#" className={classes.cart}>
              <img src={item.img} alt="green iguana" />
              <Box className={classes.content}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>{item.disc}</Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Readyholiday;
