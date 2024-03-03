import { Routes, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom';

import './css/App.css';

import IndexPage from './pages/IndexPage';
import HogosyaHome from './pages/HogosyaHome';
import JijiBabaHome from './pages/JijiBabaHome';
import HogosyaLogin from './pages/HogosyaLogin';
import JijiBabaLogin from './pages/JijiBabaLogin';
import ChatPage from './pages/ChatPage';
import NotFound from './pages/NotFoundPage';

function App() {
  const navigate = useNavigate();
  return (
    <div className='App' >
      <AppBar position='sticky' style={{ color: "#e0f2f1", backgroundColor: "#3c3c3c" }} >
        {/* <Toolbar variant='dense'>
          <IconButton edge='start' color='inherit' aria-label='menu' onClick={() => { navigate('/')}}>
            <MenuBookIcon/>
          </IconButton>
          <Typography variant='h6' color='inherit' style={{ fontFamily:'serif' }}>
            本Book
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/login-p/" element={<HogosyaLogin />} />
        <Route path="/login-g" element={<JijiBabaLogin/>} />
        <Route path="home-p" element={<HogosyaHome />} />
        <Route path="home-g" element={<JijiBabaHome />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
