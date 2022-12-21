import {
  Avatar,
  Box,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
  row: {
    width: "100%",
    padding: "13px 34px",
    marginTop: "15px",
    textAlign:'center',
    "& a":{
      display:' block',
    }
  },
});
const data = [
  {
    img: "./img/home.webp",
    name: "Home Deals",
  },
  {
    img: "./img/electronic.webp",
    name: "Electronic Deals",
  },
  {
    img: "./img/clothing.webp",
    name: "Clothing Deals",
  },
  {
    img: "./img/toy.webp",
    name: "Toy Deals",
  },
  {
    img: "./img/care.webp",
    name: "Beauty & Personal Care Deals",
  },
  {
    img: "./img/topdeal.webp",
    name: "Top Deals",
  },
];
const Topdeal = () => {
  const classes = usestyles();

  return (
    <Box className={classes.row}>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={2} key={index}>
            <Link href="">
            <Avatar
              alt="Remy Sharp"
              src={item.img}
              sx={{ width: "100%", height: "100%" }}
            />
            <Typography>{item.name}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Topdeal;
