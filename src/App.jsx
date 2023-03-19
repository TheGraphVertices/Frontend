import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx';
import UserHomePage from './pages/UserHomePage.jsx'
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="userhomepage" element={<UserHomePage />} />
          <Route path="register" element={<CreateAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
