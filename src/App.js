
import './App.css';
import MainRouter from './AllRoutes/MainRouter';
import { Navbar } from './AllRoutes/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRouter/>
      <ChakraProvider>
        <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;
