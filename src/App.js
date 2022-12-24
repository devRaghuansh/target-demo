import { Box } from '@mui/material';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <Box className='warrper'>
       <Header/>
       <Home/>
       <Footer/>
    </Box>
  );
}

export default App;
