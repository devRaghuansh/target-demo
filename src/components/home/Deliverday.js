import { Avatar, Box, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  row: {
    width: "100%",
    padding: "0px 35px",
    marginTop: "15px",
    textAlign: "center",
    "& h2": {
      fontWeight: "bold",
      lineHeight: "1.25",
      fontSize: "36px",
      margin: "0px 0px 19px",
    },
    "& a": {
      display: " block",
      "& img": {
        width: "100%",
        float: "left",
      },
      "& p": {
        color: "rgb(51, 51, 51)",
        display: " block",
        float: "left",
        marginTop: "10px",
        fontSize: " 13px",
        "& span": {
          color: "red",
        },
      },
    },
  },
});
const data = [
  {
    img: "./img/drive.webp",
    name: " Choose Order Pickup for your items. Then, when your order is ready, switch to curbside Drive Up in the Target app. ",
    span: <span>Always free,</span>,
  },
  {
    img: "./img/delivery.webp",
    name: "Your Shipt shopper will leave your order right at your doorstep. Start your membership at checkout, or pay $9.99 per delivery. ",
  },
];
const Deliverday = () => {
  const classes = usestyles();

  return (
    <Box className={classes.row}>
      <Typography variant="h2">Order today, get it today</Typography>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Link href="">
              <img
                alt="Remy Sharp"
                src={item.img}
                // sx={{ width: "100%", height: "100%" }}
              />
              <Typography>
                {item.span}
                {item.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Deliverday;
