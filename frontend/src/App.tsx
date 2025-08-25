import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './main/main';
import { Login } from './login/login';
import { Register } from './register/register';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
