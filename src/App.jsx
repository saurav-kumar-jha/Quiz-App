import { Route, Routes } from 'react-router-dom';
import './App.css'
import { QuizApp } from './component/quiz'
import 'react-toastify/dist/ReactToastify.css';
import { Homepage } from './component/homePage';
import { Result } from './component/result';
import { ToastContainer } from 'react-toastify';
import { Form } from './component/form';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/quiz' element={<QuizApp />} />
        <Route path='/result' element={<Result/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
