import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import Topic from './Topic';
import Quiz from './Quiz';
import Assignment from './Assignment';
import Instruction from './Instruction';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/modules" element={<Topic />} />
        <Route path="/topic" element={<Topic />} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/assignment' element={<Assignment/>} />
        <Route path='/instructions' element={<Instruction/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
