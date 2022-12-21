import { Box, Link, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  row: {
    backgroundColor: " rgb(245, 234, 212)",
    padding: "13px 34px",
    marginTop: "15px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    "& h2": {
      fontSize: "36px",
      fontWeight: "700",
    },
  },
  cart: {
    "& h5": {
      fontFamily: "Helvetica, Arial, sans-serif",
      color: "rgb(102 102 102)",
      lineHeight: "1.25",
      fontSize: "12px",
    },
  },
  item: {
    margin: "0 !important",
    "& div": {
      margin: "0 !important",
      padding: "0 5px !important",
      "& a": {
        background: "#fff",
        display: "block",
      },
    },
  },
});

const data = [
  {
    img: "./img/product.webp",
    price: "$399.99 - $429.99",
    name: "Try 4 months of Fitness+ for free with Target Circle",
    Band: "Apple Watch Series 8 GPS Aluminum Case with Sport Band",
  },
  {
    img: "./img/product-a.webp",
    price: "$29.99",
    name: "Sale",
    Band: "Mario & Sonic at the Olympic Games: Tokyo 2020 - Nintendo Switch",
  },
  {
    img: "./img/product-b.webp",
    price: "$399.99 - $429.99",
    name: "Try 4 months of Fitness+ for free with Target Circle",
    Band: "Apple Watch Series 8 GPS Aluminum Case with Sport Band",
  },
  {
    img: "./img/product-c.webp",
    price: "$399.99 - $429.99",
    name: "Try 4 months of Fitness+ for free with Target Circle",
    Band: "Apple Watch Series 8 GPS Aluminum Case with Sport Band",
  },
];

const Deals = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Box style={{ width: "30%" }}>
        <Typography variant="h2">Hot Deals on Top Gifts</Typography>
      </Box>
      <Box style={{ width: "70%" }}>
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          className={classes.item}
        >
          {data.map((item, index) => (
            <Grid item xs={3} key={index}>
              <Link href="#" className={classes.cart}>
                <Box>
                  <img src={item.img} alt="aa" />
                </Box>
                <Box>
                  <Typography gutterBottom variant="h5">
                    {item.price}
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    {item.Band}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Deals;
