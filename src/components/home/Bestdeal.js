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
  row:{
    backgroundColor:' rgb(245, 234, 212)',
    padding: '37px 34px',
    paddingBottom:' 0',
    textAlign: 'center',
  },
  cart:{
    background:'none !important',
    boxShadow: 'none !important',
    "& h5":{
      fontFamily: 'Helvetica, Arial, sans-serif',
      padding:' 10px 0 0 0px',
      color: 'rgb(51, 51, 51)',
      fontWeight: 'bold',
      lineHeight: '1.25',
      fontSize: '23px',
      margin: '0px 0px 8px',
    }
  }
});

const data = [
  {
    img: "./img/GUEST_74ece1dd-72fc-4232-ab6e-75a230994f56.webp",
    name: "Gift Cards",
  },
  {
    img: "./img/GUEST_78ea45c3-2ce2-4117-8512-39317925e717.webp",
    name: "Stocking Stuffers",
  },
  {
    img: "./img/GUEST_3c3bf7a4-0093-4a62-89ed-5c5b7f19ee6a.webp",
    name: "Top Gifts",
  },
  {
    img: "./img/GUEST_9c3e6241-f349-4205-90a6-5ac8fe1b3f33.webp",
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
                  // height="140"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent style={{padding:'0'}}>
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
