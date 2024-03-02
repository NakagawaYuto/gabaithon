import { Routes, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom';

import './css/App.css';

import HomePage from './Pages/HomePage';
import EditPage from './Pages/EditPage';
import BlogPage from './Pages/BlogPage';
import NotFound from "./Pages/NotFoundPage"; 
import AddPage from './Pages/AddPage';

function App() {
  const navigate = useNavigate();
  return (
    <div className='App' >
      <AppBar position='sticky' style={{ color: "#e0f2f1", backgroundColor: "#3c3c3c" }} >
        <Toolbar variant='dense'>
          <IconButton edge='start' color='inherit' aria-label='menu' onClick={() => { navigate('/')}}>
            <MenuBookIcon/>
          </IconButton>
          <Typography variant='h6' color='inherit' style={{ fontFamily:'serif' }}>
            本Book
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/edit/" element={<EditPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/add/" element={<AddPage />} />
      </Routes>
    </div>
  );
}

export default App;
