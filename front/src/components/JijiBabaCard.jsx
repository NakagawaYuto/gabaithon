import React, { useState, useEffect } from 'react';
import axios from "axios";

import {
  Card, 
  CardActionArea,
  Grid,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Rating,
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
      <Grid item>
        <Card
          key={index}
          sx={{ 
            width: '70vw',
            borderRadius:'16px' 
          }} 
          elevation={4} 
          style={{
            margin: 10,
          }}
        >
          <CardActionArea
            onClick={
              (e) => { handleListClick(e, index) }
            }
          >
            <Grid 
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item>
                <IconButton>
                  <Avatar 
                    sx={{ 
                      bgcolor: '#d1abde',
                      width: '80px',
                      height: '80px'
                    }} 
                    src="/icons/1.jpeg">
                    <PersonIcon 
                      style={{ 
                        color: 'white',
                      }} 
                    />
                  </Avatar>
                </IconButton>
              </Grid>
              <Grid item>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    名前：{ value.name }
                  </Typography>
                  <Typography gutterBottom variant="body2" component="text.secondary">
                    年齢：{ `${age}` } 歳
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    性別: { value.gender }
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* { `${EvaluationList}` } */}
                    <Rating
                      name="simple-controlled"
                      value={EvaluationList}
                      sx={{
                        fontSize: '1.2rem'
                      }}
                    />
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  )
}

export default JijiBabaCard;