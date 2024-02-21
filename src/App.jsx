
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import SingleMovie from './SingleMovie';
import Error from './Error';
import './App.css';
function App() {

  return (
   <>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="*" element={<Error/>}/>
    <Route path="movie/:id" element={<SingleMovie/>}/>
  </Routes>
  
  
   </>
  )
}

export default App
