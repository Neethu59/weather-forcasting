
import './App.css';
import Weather from './Components/Weather/Weather';

import {BrowserRouter,Routes,Route} from"react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    
     <Route path="/" element={<Weather/>}/>
    
 </Routes>
  </BrowserRouter>
  );
}

export default App;
