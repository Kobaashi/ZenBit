import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './main/main';
import { Login } from './login/login';
import { Register } from './register/register';
import { Deals } from './deals/deals';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
