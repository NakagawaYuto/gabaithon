import * as React from 'react';

import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  IconButton,
  Avatar,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';


const ChildCard = ({
  index,
  value,
  handleSelect,
  selectedIndex,
  handleListClick,
}) => {
  return (
  <>
    <ListItem
      key={index}
      style={{
        width: '90%',
      }}
    >
      <ListItemAvatar>
        <IconButton onClick={(e)=>handleSelect(e, index)}>
          {index === selectedIndex ? (
            <Avatar sx={{ bgcolor: '#d1abde' }}>
              <PersonIcon style={{ color: 'white' }} />
            </Avatar>
          ) : (
            <Avatar>
              <PersonIcon />
            </Avatar>
          )}
        </IconButton>
      </ListItemAvatar>
      <ListItemButton
        onClick={(event) => {
          handleListClick(event, index);
        }}
        disableRipple
        style={
          index === selectedIndex
            ? {
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }
            : {
                '&:hover': {
                  borderRadius: '15px',
                  backgroundColor: 'rgba(171, 184, 222, 0.5)',
                },
              }
        }
      >
        <ListItemText
          primary={value.name}
        />
        <ListItemText
          primary={value.age}
        />
        <ListItemText
          primary={value.sex}
        />
        <ListItemText
          primary={value.address}
        />
      </ListItemButton>
    </ListItem>
  </>
  )
}

export default ChildCard;