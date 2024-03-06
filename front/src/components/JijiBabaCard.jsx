import React, { useState, useEffect } from 'react';
import axios from "axios";

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

// 評価値の計算
const useElderlyEvaluations = (ElderlyPeople_ID) => {
  const baseURL = "http://localhost:3000/evaluations/"
  const [EvaluationLists, setEvaluationLists] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const filteredData = response.data.filter(evaluation => evaluation.elderly_person_id === ElderlyPeople_ID);      // ElderlyPeople_IDに対応するデータのみをフィルタリング
      setEvaluationLists(filteredData);
    });
    console.log(ElderlyPeople_ID)
  }, [ElderlyPeople_ID]);

  const totalEvaluation = EvaluationLists.reduce((acc, curr) => acc + curr.evaluation, 0);
  const averageEvaluation = totalEvaluation / EvaluationLists.length;
  
  // console.log("EvaluationLists", EvaluationLists)
  // console.log(averageEvaluation)
  return averageEvaluation.toFixed(2);
}

const JijiBabaCard = ({
  index,
  value,
  handleSelect,
  selectedIndex,
  handleListClick,
}) => {
  const age = calculateAge(value.created_at, value.date_of_birth);
  const EvaluationList = useElderlyEvaluations(value.id);

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
            primary={`${EvaluationList}`}
          />
        </ListItemButton>
      </ListItem>
    </>
  )
}

export default JijiBabaCard;