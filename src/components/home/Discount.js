import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  row: {
    padding: "37px 34px",
    paddingBottom: " 0",
    textAlign: "center",
    width: '100%',
    "& h2":{
      fontWeight: 'bold',
    lineHeight: '1.25',
    fontSize: '36px',
    margin: '0px 0px 19px',
    }
  },
  cart: {
    background: "none !important",
    boxShadow: "none !important",
    "& h5": {
      fontFamily: "Helvetica, Arial, sans-serif",
      padding: "0",
      color: "#fff",
      fontWeight: "bold",
      lineHeight: "1.25",
      fontSize: "50px",
      margin: "0",
      display: "flex",
      alignItems: "center",
      "& span": {
        display: "flex",
        flexDirection: "column",
        lineHeight: "0.8",
        fontSize: "24px",
      },
    },
    "& h6": {
      color: "rgb(51, 51, 51)",
      fontWeight: "bold",
      lineHeight: "1.25",
      fontSize: "20px",
      margin: "15px 0px 8px",
    },
  },
  cartcontent: {
    padding: " 0px",
    position: "absolute",
    bottom: "1%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#fff",
    "& p": {
      fontSize: "1rem",
      fontWeight: "700",
      lineHeight: "1",
    },
  },
});

const data = [
  {
    img: "./img/product-d.webp",
    discount: "40",
    disc: "select women’s sweaters*",
  },
  {
    img: "./img/product-e.webp",
    discount: "25",
    con: "BOGO",
    disc: "beauty & personal care gift sets*",
  },
  {
    img: "./img/product-f.webp",
    discount: "60",
    disc: "video games*",
    con: "Up to",
  },
  {
    img: "./img/product-g.webp",
    discount: "50",
    disc: "kitchen items*",
    con: "Up to",
  },
  {
    img: "./img/product-h.webp",
    discount: "50",
    disc: "toys*",
    con: "Up to",
  },
  {
    img: "./img/product-i.webp",
    discount: "100",
    con: "BOGO",
    disc: "select Apple Watch, AirPods & iPad items*",
  },
  {
    img: "./img/product-k.webp",
    discount: "40",
    disc: "TVs, sound bars & streaming devices*",
    con: "Up to",
  },
  {
    img: "./img/product-j.webp",
    discount: "30",
    disc: "slippers & shoes for the family*",
    con: "Up to",
  },
];

const Discount = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Box>
        <Typography variant="h2">Deals on so many gifts</Typography>
      </Box>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={3} key={index}>
            <Card className={classes.cart}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  // height="140"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent className={classes.cartcontent}>
                  <Typography>{item.con}</Typography>
                  <Typography gutterBottom variant="h5">
                    {item.discount}
                    <span>
                      <span>%</span>
                      <span>of</span>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Typography gutterBottom variant="h6">
                {item.disc}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Discount;
