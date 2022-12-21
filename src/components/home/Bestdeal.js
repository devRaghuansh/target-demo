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
    backgroundColor: " rgb(245, 234, 212)",
    padding: "37px 34px",
    paddingBottom: " 0",
    textAlign: "center",
  },
  cart: {
    background: "none !important",
    boxShadow: "none !important",
    "& h5": {
      fontFamily: "Helvetica, Arial, sans-serif",
      padding: " 10px 0 0 0px",
      color: "rgb(51, 51, 51)",
      fontWeight: "bold",
      lineHeight: "1.25",
      fontSize: "23px",
      margin: "0px 0px 8px",
    },
  },
});

const data = [
  {
    img: "./img/gift-a.webp",
    name: "Gift Cards",
  },
  {
    img: "./img/gift-b.webp",
    name: "Stocking Stuffers",
  },
  {
    img: "./img/gift-c.webp",
    name: "Top Gifts",
  },
  {
    img: "./img/gift-d.webp",
    name: "Gift Wrap",
  },
];

const Bestdeal = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={3} key={index}>
            <Card className={classes.cart}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent style={{padding:"0"}}>
                  <Typography gutterBottom variant="h5">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Bestdeal;
