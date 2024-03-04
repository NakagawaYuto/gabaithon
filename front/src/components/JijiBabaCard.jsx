import * as React from 'react';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Avatar,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';

// 年齢を計算する関数
const calculateAge = (createdAt, dateOfBirth) => {
  const createdAtDate = new Date(createdAt);
  const dateOfBirthDate = new Date(dateOfBirth);

  let age = createdAtDate.getFullYear() - dateOfBirthDate.getFullYear();
  const m = createdAtDate.getMonth() - dateOfBirthDate.getMonth();

  if (m < 0 || (m === 0 && createdAtDate.getDate() < dateOfBirthDate.getDate())) {
    age--;
  }

  return age;
};

const JijiBabaCard = ({
  index,
  value,
  handleSelect,
  selectedIndex,
}) => {
  const age = calculateAge(value.created_at, value.date_of_birth);

  return (
  <>
    <ListItem
      key={index}
      style={{
        width: '90%',
      }}
    >
      <ListItemAvatar>
        <IconButton onClick={(e) => handleSelect(e, index)}>
          {index === selectedIndex ? (
            <Avatar sx={{ bgcolor: '#d1abde' }} src="/icons/1.jpeg">
              <PersonIcon style={{ color: 'white' }} />
            </Avatar>
          ) : (
            <Avatar src="/icons/2.png">
              <PersonIcon />
            </Avatar>
          )}
        </IconButton>
      </ListItemAvatar>
      <ListItemText
        primary={value.name}
      />
      <ListItemText
        primary={`${age}`}
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