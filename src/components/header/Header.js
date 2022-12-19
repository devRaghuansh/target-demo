import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import Topheader from "./Topheader";

const Header = () => {
  return (
    <AppBar position="static">
    <Topheader/>
      <Toolbar>
        <Container maxWidth="sm">
          <Box className="row">
            <Typography variant="h3">hello</Typography>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
