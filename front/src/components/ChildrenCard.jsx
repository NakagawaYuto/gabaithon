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



const ChildCard = ({
  index,
  value,
  handleSelect,
  selectedIndex,
  handleListClick,
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
            primary={`${age}`}
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


// [
//   {
//       "id": 1,
//       "created_at": "2024-03-04T01:28:21.770Z",
//       "updated_at": "2024-03-04T01:28:21.770Z",
//       "name": "John Doe",
//       "address": "123 Main St, City",
//       "date_of_birth": "1950-05-20",
//       "gender": "male",
//       "self_introduction": "Hello, I'm John Doe."
//   },
// ]