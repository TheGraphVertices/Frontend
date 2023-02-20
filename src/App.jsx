import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx';
import UserHomePage from './pages/UserHomePage.jsx'
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="userhomepage" element={<UserHomePage />} />
          <Route path="register" element={<CreateAccount />} />
          <Route path='forgotpassword' element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
