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
      padding: "35px 0px",
      marginTop: "15px",
      textAlign:'center',
      "& h2": {
        fontWeight: "bold",
        lineHeight: "1.25",
        fontSize: "36px",
        margin: "0px 0px 19px",
      },
      "& a":{
        display:' block',
        textDecoration: 'none',
        "& p":{
          color: 'rgb(51, 51, 51)',
          fontSize: '0.9rem',
          fontFamily: 'inherit',
          fontWeight: 'normal',
          padding: '6px',
        }
      }
    },
  });
  const data = [
    {
      img: "./img/Categorie1.webp",
      name: "Home Deals",
    },
    {
      img: "./img/Categorie2.webp",
      name: "Electronic Deals",
    },
    {
      img: "./img/Categorie3.webp",
      name: "Clothing Deals",
    },
    {
      img: "./img/Categorie4.webp",
      name: "Toy Deals",
    },
    {
      img: "./img/Categorie5.webp",
      name: "Beauty & Personal Care Deals",
    },
    {
      img: "./img/Categorie6.webp",
      name: "Top Deals",
    },
    {
        img: "./img/Categorie7.webp",
        name: "Home Deals",
      },
      {
        img: "./img/Categorie8.webp",
        name: "Electronic Deals",
      },
      {
        img: "./img/Categorie9.webp",
        name: "Clothing Deals",
      },
      {
        img: "./img/Categorie10.webp",
        name: "Toy Deals",
      },
      {
        img: "./img/Categorie11.webp",
        name: "Beauty & Personal Care Deals",
      },
      {
        img: "./img/Categorie12.webp",
        name: "Top Deals",
      },
      {
        img: "./img/Categorie13.webp",
        name: "Home Deals",
      },
      {
        img: "./img/Categorie14.webp",
        name: "Electronic Deals",
      },
      {
        img: "./img/Categorie15.webp",
        name: "Clothing Deals",
      },
      {
        img: "./img/Categorie16.webp",
        name: "Toy Deals",
      },
      {
        img: "./img/Categorie17.webp",
        name: "Beauty & Personal Care Deals",
      },
      {
        img: "./img/Categorie18.webp",
        name: "Top Deals",
      },
  ];
  const Categorie = () => {
    const classes = usestyles();
  
    return (
      <Box className={classes.row}>
        <Typography variant="h2">Featured categories</Typography>
        <Link href="">Shop all</Link>
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
  
  export default Categorie;
  