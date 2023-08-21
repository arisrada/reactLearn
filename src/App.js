// import './App.css';
// import Task5 from './pages/Task5';
import { Route, Routes } from 'react-router-dom';
// import Usestate from './pages/Usestate';
import Task6 from './pages/Task6';
// import Home from './pages/Home';
// import About from './pages/About';

const App = () => {
  return (
      <Routes>
        {/* <Route path='/' element={<Task5/>} /> */}
        <Route path='/' element={<Task6/>}/>
        {/* <Route path='/About' element={<About/>}/> */}
      </Routes>
  );
}

export default App;
