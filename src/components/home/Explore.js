import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const usestyles = makeStyles({
    row: {
        width: "100%",
        marginTop: "15px",
        "& img":{
            width:'100%',
            display:'block'
        }
    }
});
const Explore = () => {
  const classes = usestyles();
  return (
    <Box className={classes.row}>
      <Link href="#">
        <img src="./img/explore1.jpg" alt="aa" />
      </Link>
    </Box>
  );
};

export default Explore;
