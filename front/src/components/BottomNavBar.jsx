import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HomeIcon from '@mui/icons-material/Home';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

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
          backgroundColor: '	#C5956B',
          color: 'black',
          elevation: 0,
          '& .Mui-selected': {
            color: 'white', // 選択されたタブのテキストカラー
          },
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
              color: 'white', // 選択されたタブのテキストカラー
            },
          }}
        />
        <BottomNavigationAction 
          label="探す" 
          icon={<PersonSearchIcon />}
          sx={{
            '&:hover': {
              color: 'white'
            },
            '& .Mui-selected': {
              color: 'white', // 選択されたタブのテキストカラー
            },
          }}
        />
        <BottomNavigationAction 
          label="チャット" 
          icon={<ChatIcon />} 
          sx={{
            '&:hover': {
              color: 'white'
            },
            '& .Mui-selected': {
              color: 'white', // 選択されたタブのテキストカラー
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
}