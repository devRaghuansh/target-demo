import { Box } from '@mui/material'
// import { makeStyles } from '@mui/styles'
import React from 'react'
import Bestdeal from '../components/home/Bestdeal'
import Brand from '../components/home/Brand'
import Deals from '../components/home/Deals'



// const useStyles = makeStyles({

// })

const Home = () => {
    // const classes = useStyles()
  return (
    <Box className='warrper'>
        <Box className='container'>
            <Bestdeal/>
            <Brand/>
            <Deals/>
        </Box>
      
    </Box>
  )
}

export default Home
