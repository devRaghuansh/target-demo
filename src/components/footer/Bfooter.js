import { Box, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import data from "./Bdata";

const usestyles = makeStyles({
  footer: {
    width: "100%",
    float: "left",
    clear: "both",
    background: "#333333",
    padding: 24,
  },
  Bfooter:{
    flexDirection:'row',
    display:'flex',
    justifyContent:'space-between'
  },
  item: {
    display:'flex',
    "& a": {
      color: "#fff",
      alignItems: "center",
      margin: "8px 10px",
      display: "inline-flex",
      textDecoration: "none",
      fontSize: "12px",
      "& span": {
        color: "#c51616",
        "& svg": {
          marginRight: 13,
        },
      },
    },
  },
});

const Bfooter = () => {
  const classes = usestyles();
  return (
    <Box className={classes.footer}>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={12} key={index} className={classes.Bfooter}>
            <Box className={classes.item}>
              {item.icons.map((icon, i) => (
                <Box key={i}>
                  <Link href="#">{icon}</Link>
                </Box>
              ))}
            </Box>
            <Box className={classes.item}>
              {item.name.map((menu, i) => (
                <Box key={i}>
                  <Link href="#">{menu}</Link>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Bfooter;
