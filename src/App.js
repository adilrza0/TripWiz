
import './App.css';
import MainRouter from './AllRoutes/MainRouter';
import Navbar  from './LandingComponents/Navbar';
//import { ChakraProvider } from '@chakra-ui/react';
//import { Footer } from './Components/Footer';
// import { Navbar } from './AllRoutes/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      <MainRouter/>
      {/* <ChakraProvider>
        <Footer/>
      </ChakraProvider> */}
    </div>
  );
}

export default App;
