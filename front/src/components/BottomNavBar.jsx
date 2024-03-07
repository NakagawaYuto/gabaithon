import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HomeIcon from '@mui/icons-material/Home';

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
          backgroundColor: '#fef4f4',
          color: 'black',
          elevation: 0
        }}
      >
        <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
        <BottomNavigationAction label="探す" icon={<PersonSearchIcon />} />
        <BottomNavigationAction label="チャット" icon={<ChatIcon />} />
      </BottomNavigation>
    </Box>
  );
}