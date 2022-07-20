import './App.css';
import TopBar from "./components/topbar/TopBar"
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {

  const user = false;

  return (
    <BrowserRouter>
      <TopBar/>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/register" element={<Register />} />
          <Route path ="/login" element={<Login />} /> 
          <Route path ="/write" element={<Write />} /> 
          <Route path ="/settings" element={<Settings />} /> 
          <Route path ="/post/:postId" element={<Single />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;

// {/* <Home /> */}
// {/* <Single /> */}
// {/* <Write /> */}
// {/* <Settings /> */}
// {/* <Login /> */}
// {/* <Register /> */}
