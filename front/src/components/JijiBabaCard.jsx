import * as React from 'react';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Avatar,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';

const JijiBabaCard = ({
  index,
  value,
  handleSelect,
  selectedIndex,
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
    </ListItem>
  </>
  )
}

export default JijiBabaCard;