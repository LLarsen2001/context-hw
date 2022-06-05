import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageHolder from './pages/PageHolder';
import Account from './pages/Accout';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute.js' 
import Users from './pages/Users';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageHolder />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route element={<ProtectedRoute />}>
        <Route path='/account' element={<Account />} />
        <Route path='/users' element={<Users />} />
        </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
