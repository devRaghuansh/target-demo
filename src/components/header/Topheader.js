import {
  Container,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles({
  Topheader: {
    width: "100%",
    clear: "both",
    color: "#fff",
    height: "50px",
    backgroundColor: "rgb(204, 0, 0)",
    display: " flex",
    alignItems: " center",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
      color: "#fff",
      textDecoration: "none",
    },
  },
  col: {
    width: "50%",
    "& ul": {
      display: "flex",
      justifyContent: "end",
      "& li": {
        width: "auto",
        "& div span": {
          fontSize: "12px !important",
        },
      },
    },
  },
  clock: {
    "& span": {
      fontSize: "12px !important",
    },
  },
  town: {
    "& p": {
      fontWeight: "bold ",
      fontSize: "14px",
      color: "#fff",
      lineHeight: "0",
      display: "flex",
      alignItems: "center",
    },
  },
});

const navItems = [
  "Registry",
  "Weekly Ad",
  "RedCard",
  "Target Circle",
  "Find Stores",
];
const Topheader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Topheader}>
      <Container maxWidth="xl">
        <Box className={classes.row}>
          <Box className={classes.col}>
            <Link href="#">
              <Box className={classes.clock}>
                <span>My Store</span>
                <span> • Closes at 12am</span>
              </Box>
              <Box className={classes.town}>
                <Typography>
                  Watertown{" "}
                  <span>
                    <KeyboardArrowDownIcon />
                  </span>
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box className={classes.col}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Topheader;
