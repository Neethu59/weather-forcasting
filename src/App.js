
import './App.css';
import Weather from './Components/Weather/Weather';
import {BrowserRouter,Routes,Route} from"react-router-dom";
import Input from './Components/Weather/Input';
import Currentdata from './Components/Weather/Currentdata';
import Week from './Components/Weather/Week';


function App() {
const citysearch=(cityname)=>{
  console.log(cityname)
}

  return (
    <BrowserRouter>
    <Routes>
    
     <Route path="/" element={<Weather/>}/>
     <Route path="/input" element={<Input/>}/>
     <Route path="/currentdata" element={<Currentdata />}/>
     <Route path="/week" element={<Week/>}/>
     
     
     
 </Routes>
  </BrowserRouter>
  );
}

export default App;
