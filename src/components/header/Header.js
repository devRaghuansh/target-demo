// import { Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Topheader from "./Topheader";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f7f7f7",
  color: " #000",
  marginRight: theme.spacing(2),
  width: 471,
  padding: "3px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "0",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "90%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const useStyles = makeStyles({
  logo: {
    "& a": {
      width: "48px",
      height: "48px",
      display: "inline-block",
      "& img": {
        width: "100%",
        display: "block",
      },
    },
  },
  row: {
    width: "100%",
    clear: "both",
    display: "flex",
    height: "80px",
    alignItems: "center",
  },
  menu: {
    color: "#000",
    "& ul": {
      display: "flex",
      padding: "0",
      justifyContent: "end",
      marginLeft: "15px",
      gap: "18px",
      "& li": {
        width: "auto",
        "& div span": {
          fontSize: "16px !important",
          fontWeight: "bold",
          padding: "0px !important",
          color: "#000 !important",
        },
      },
    },
  },
  search: {
    display: "flex",
  },
  user: {
    display: "flex",
    color: "#000",
    "& p": {
      fontSize: "14px",
      marginLeft: "15px",
    },
    "& svg": {
      color: "rgb(51, 51, 51)",
      width: "24px",
      height: "24px",
    },
    "& button": {
      borderRadius: "10px",
    },
  },
  cart: {
    marginLeft: "30px",
  },
});

const menuItems = ["Categories", "Deals", "What’s New", "Pickup & Delivery"];

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="relative"
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
    >
      <Topheader />
      <Toolbar>
        <Box className={classes.row}>
          <Box className={classes.logo}>
            <Link href="./">
              <img src="./Logo.svg" alt="logo" />
            </Link>
          </Box>
          <Box className={classes.menu}>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box className={classes.search}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box className={classes.user}>
            <Box>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <AccountCircleOutlinedIcon />
                <Typography>Sign in</Typography>
              </IconButton>
            </Box>
            <Box className={classes.cart}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
