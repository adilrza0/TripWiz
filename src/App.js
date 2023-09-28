
import './App.css';
import MainRouter from './AllRoutes/MainRouter';
import { Navbar } from './AllRoutes/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRouter/>
    </div>
  );
}

export default App;
