import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HomeIcon from '@mui/icons-material/Home';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === '/') {
    return;
  }

  else if (location.pathname === '/login-g') {
    return (
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ 
            position: 'fixed',
            bottom:0, 
            left: 0, 
            right: 0,
            backgroundColor: '#C5956B',
            color: 'black',
            elevation: 0,
            '& .Mui-selected': {
              color: 'white',
            },
            zIndex: 990,
          }}
        >
          <BottomNavigationAction 
            label="ホーム" 
            icon={<HomeIcon />}
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/')}}
          />
          <BottomNavigationAction 
            label="探す" 
            icon={<PersonSearchIcon />}
            sx={{
              '&:hover': {
                color: 'white',
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/home-g')}}
          />
          <BottomNavigationAction 
            label="チャット" 
            icon={<ChatIcon />} 
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/chat-g/1')}}
          />
        </BottomNavigation>
      </Box>
    );
  }
  else if (location.pathname === '/login-p') {
    return (
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ 
            position: 'fixed',
            bottom:0, 
            left: 0, 
            right: 0,
            backgroundColor: '#C5956B',
            color: 'black',
            elevation: 0,
            '& .Mui-selected': {
              color: 'white',
            },
            zIndex: 990,
          }}
        >
          <BottomNavigationAction 
            label="ホーム" 
            icon={<HomeIcon />}
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/')}}
          />
          <BottomNavigationAction 
            label="探す" 
            icon={<PersonSearchIcon />}
            sx={{
              '&:hover': {
                color: 'white',
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/home-p')}}
          />
          <BottomNavigationAction 
            label="チャット" 
            icon={<ChatIcon />} 
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/chat-p/1')}}
          />
        </BottomNavigation>
      </Box>
    );
  }
  else if (location.pathname === '/home-p') {
    return (
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ 
            position: 'fixed',
            bottom:0, 
            left: 0, 
            right: 0,
            backgroundColor: '#C5956B',
            color: 'black',
            elevation: 0,
            '& .Mui-selected': {
              color: 'white',
            },
            zIndex: 990,
          }}
        >
          <BottomNavigationAction 
            label="ホーム" 
            icon={<HomeIcon />}
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/')}}
          />
          <BottomNavigationAction 
            label="探す" 
            icon={<PersonSearchIcon />}
            sx={{
              '&:hover': {
                color: 'white',
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/home-p')}}
          />
          <BottomNavigationAction 
            label="チャット" 
            icon={<ChatIcon />} 
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/chat-p/1')}}
          />
        </BottomNavigation>
      </Box>
    );
  }
  else if (location.pathname === '/home-g') {
    return (
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ 
            position: 'fixed',
            bottom:0, 
            left: 0, 
            right: 0,
            backgroundColor: '#C5956B',
            color: 'black',
            elevation: 0,
            '& .Mui-selected': {
              color: 'white',
            },
            zIndex: 990,
          }}
        >
          <BottomNavigationAction 
            label="ホーム" 
            icon={<HomeIcon />}
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/')}}
          />
          <BottomNavigationAction 
            label="探す" 
            icon={<PersonSearchIcon />}
            sx={{
              '&:hover': {
                color: 'white',
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/home-g')}}
          />
          <BottomNavigationAction 
            label="チャット" 
            icon={<ChatIcon />} 
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/chat-g/1')}}
          />
        </BottomNavigation>
      </Box>
    );
  }
  else if (/^\/chat-g\/\d+$/.test(location.pathname)) {
    return (
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ 
            position: 'fixed',
            bottom:0, 
            left: 0, 
            right: 0,
            backgroundColor: '#C5956B',
            color: 'black',
            elevation: 0,
            '& .Mui-selected': {
              color: 'white',
            },
            zIndex: 990,
          }}
        >
          <BottomNavigationAction 
            label="ホーム" 
            icon={<HomeIcon />}
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/')}}
          />
          <BottomNavigationAction 
            label="探す" 
            icon={<PersonSearchIcon />}
            sx={{
              '&:hover': {
                color: 'white',
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/home-g')}}
          />
          <BottomNavigationAction 
            label="チャット" 
            icon={<ChatIcon />} 
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/chat-g/1')}}
          />
        </BottomNavigation>
      </Box>
    );
  }
  else if (/^\/chat-p\/\d+$/.test(location.pathname)) {
    return (
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ 
            position: 'fixed',
            bottom:0, 
            left: 0, 
            right: 0,
            backgroundColor: '#C5956B',
            color: 'black',
            elevation: 0,
            '& .Mui-selected': {
              color: 'white',
            },
            zIndex: 990,
          }}
        >
          <BottomNavigationAction 
            label="ホーム" 
            icon={<HomeIcon />}
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/')}}
          />
          <BottomNavigationAction 
            label="探す" 
            icon={<PersonSearchIcon />}
            sx={{
              '&:hover': {
                color: 'white',
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/home-p')}}
          />
          <BottomNavigationAction 
            label="チャット" 
            icon={<ChatIcon />} 
            sx={{
              '&:hover': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
              },
            }}
            onClick={()=>{navigate('/chat-p/1')}}
          />
        </BottomNavigation>
      </Box>
    );
  }
}