import { Box } from "@mui/material";
import React from "react";
import Bestdeal from "../components/home/Bestdeal";
import Brand from "../components/home/Brand";
import Categorie from "../components/home/Categorie";
import Corporate from "../components/home/Corporate";
import Dealofday from "../components/home/Dealofday";
import Deals from "../components/home/Deals";
import Deliverday from "../components/home/Deliverday";
import Discount from "../components/home/Discount";
import Email from "../components/home/Email";
import Explore from "../components/home/Explore";
import Holidaydiscount from "../components/home/Holidaydiscount";
import Readyholiday from "../components/home/Readyholiday";
import Topdeal from "../components/home/Topdeal";

const Home = () => {
  return (
    <Box className='warrper'>
        <Box className='container'>
            <Bestdeal/>
            <Brand/>
            <Deals/>
            <Dealofday/>
            <Discount/>
            <Holidaydiscount/>
            <Topdeal/>
            <Readyholiday/>
            <Categorie/>
            <Deliverday/>
            <Corporate/>
            <Explore/>
            <Email/>
        </Box>
      
    </Box>
  );
};

export default Home;
