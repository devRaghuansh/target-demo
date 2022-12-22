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
    background:'#f7f7f7',
    marginTop: '45px',
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
    background: "none !important",
    boxShadow: "none !important",
  },
  cartcontent: {
    width: "100%",
    position: "absolute",
    bottom: "1%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#fff",
    "& h5": {
      fontWeight: "bold",
    },
    "& p": {
      fontSize: 14,
      margin: "15px 0px 8px",
    },
  },
});

const data = [
  {
    img: "./img/target.webp",
    name: "Target Forward",
    disc: "Let’s move toward a more equitable & regenerative future together. Explore our sustainability strategy.",
  },
  {
    img: "./img/our.webp",
    name: "Our commitments",
    disc: "Learn about our commitments to ethics, our team, our communities & more.",
  },
];

const Corporate = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Box>
        <Typography variant="h2">Our corporate commitments</Typography>
      </Box>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Card className={classes.cart}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent className={classes.cartcontent}>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography>{item.disc}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Corporate;
