import * as React from 'react';

import { Routes, Route } from "react-router-dom";
import { 
  AppBar
} from '@mui/material';

import './css/App.css';

import IndexPage from './pages/IndexPage';
import HogosyaHome from './pages/HogosyaHome';
import JijiBabaHome from './pages/JijiBabaHome';
import HogosyaLogin from './pages/HogosyaLogin';
import JijiBabaLogin from './pages/JijiBabaLogin';
import ChatPage from './pages/ChatPage';
import NotFound from './pages/NotFoundPage';
import FlashAlert from "./components/FlashAlert";
import Sakura from './components/LeafDesign';
import SimpleBottomNavigation from './components/BottomNavBar';

function App() {
  const [severity, setSeverity] = React.useState("error");
  const [message, setMessage] = React.useState("");
  const [nowDate, setNowDate] = React.useState("0");
  const showFlashAlert = (severity, message) => {
    setSeverity(severity);
    setMessage(message);
    setNowDate(String(Date.now()));
  }
  return (
    <div className='App' >
      <AppBar position='sticky' style={{ color: "#e0f2f1", backgroundColor: "#3c3c3c" }} >
      </AppBar>
      <FlashAlert severity={severity} message={message} createdAt={nowDate} />
      <Sakura></Sakura>
      <SimpleBottomNavigation/>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route 
          path="/login-p/" 
          element={<HogosyaLogin showFlashAlert={showFlashAlert}/>} 
        />
        <Route 
          path="/login-g" 
          element={<JijiBabaLogin showFlashAlert={showFlashAlert}/>} 
        />
        <Route path="home-p" element={<HogosyaHome />} />
        <Route path="home-g" element={<JijiBabaHome />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
