import { Box, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Bfooter from "./Bfooter";
import data from "./Fdata";

const usestyles = makeStyles({
  footer: {
    width: "100%",
    float: "left",
    clear: "both",
    background: "#f7f7f7",
    padding: 24,
    "& h5": {
      color: " rgb(51, 51, 51)",
      fontWeight: "bold",
      lineHeight: 1.25,
      fontSize: 16,
      margin: "0px 0px 8px",
    },
  },
  menu: {
    "& a": {
      color: "#666666",
      alignItems: 'center',
      margin:'8px 0px',
      display:'inline-flex',
      textDecoration: 'none',
      fontSize: '12px',
      "& span":{
        color: '#c51616',
        "& svg":{
            marginRight: 13,
        }
    }
    },
  },
});


const Footer = () => {
  const classes = usestyles();
  return (
    <>
    <Box className={classes.footer}>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={3} key={index}>
            <Typography variant="h5">{item.hand}</Typography>
            <Box className={classes.menu}>
              {item.name.map((item, index) => (
                <Box key={index}>
                  <Link href="">
                    <span>{item.icon}</span>
                    {item.menu}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center">
        <img src="./img/footer.svg" alt="logo" />
      </Box>
    </Box>
    <Bfooter/>
    </>
  );
};

export default Footer;
