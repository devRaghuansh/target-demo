import {
  Box,
  Button,
  FormControl,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import {red } from '@mui/material/colors';

const usestyles = makeStyles({
  row: {
    width: "100%",
    padding: "35px 0px",
    marginTop: "15px",
    textAlign: "center",
  },
  coll:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:15,

  },
  form:{
    gap:15,
    alignItems:'center',
    flexDirection:'row !important',
    "& input":{
        padding: '10px 8px',
    },
    "& label":{
        lineHeight: 0.9,
    }
  }
});


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[900]),
    backgroundColor: red[700],
    '&:hover': {
      backgroundColor: red[700],
    },
  }));

const Email = () => {
  const classes = usestyles();
  return (
    <Box className={classes.row}>
      <Box className={classes.coll}>
          <Typography variant="h6">
            Get top deals, latest trends, and more.
          </Typography>
        <FormControl autoComplete="on" className={classes.form}>
          <TextField id="outlined-basic" label="Email-address" variant="outlined" required  type="Email" />
          <ColorButton variant="contained">Sign up</ColorButton>
        </FormControl>
        <Link href="">Privacy policy</Link>
      </Box>
    </Box>
  );
};

export default Email;
