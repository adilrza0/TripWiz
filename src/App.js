
import './App.css';
import MainRouter from './AllRoutes/MainRouter';

import { ChakraProvider } from '@chakra-ui/react';
import { Footer } from './Components/Footer';
import Navbar from './LandingComponents/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRouter/>
      <ChakraProvider>
        <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;
