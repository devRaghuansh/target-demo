import { Box } from "@mui/material";
import React from "react";
import Bestdeal from "../components/home/Bestdeal";
import Brand from "../components/home/Brand";
import Dealofday from "../components/home/Dealofday";
import Deals from "../components/home/Deals";
import Discount from "../components/home/Discount";

const Home = () => {
  return (
    <Box className='warrper'>
        <Box className='container'>
            <Bestdeal/>
            <Brand/>
            <Deals/>
            <Dealofday/>
            <Discount/>
        </Box>
      
    </Box>
  );
};

export default Home;
