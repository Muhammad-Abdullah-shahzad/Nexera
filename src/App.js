import logo from './logo.svg';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
  );
}

export default App;
