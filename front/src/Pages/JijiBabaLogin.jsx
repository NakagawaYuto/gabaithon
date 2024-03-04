import * as React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  TextField,
  Button,
} from '@mui/material';


const Login = () => {
  const baseURL = "http://localhost:3000/elderly_people/"
  const navigate = useNavigate();
  const gridWidth = '80%';
  const gridMargin = '20px';
  const fontSize = '30px';

  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [date_of_birth, setDate_of_birth] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [self_introduction, setSelf_introduction] = React.useState('');

  const DataRegistration = async() =>{
    await axios.post(baseURL, {
      elderly_people: {
        name: String(name),
        address: String(address),
        date_of_birth: date_of_birth, // 日付形式の確認が必要です（'YYYY-MM-DD'など）
        gender: String(gender),
        self_introduction: String(self_introduction),
      }
    })
    navigate('/home-g')
  }

  return (
    <>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{width:'100%'}}
      >
        {/* お名前 */}
        <Grid
          item
          style={{
            width: gridWidth, 
            margin: gridMargin,
          }}
        >
          <TextField 
            id="outlined-basic-size-normal" 
            label="お名前" 
            variant="outlined"
            InputProps={{
              style: {
                fontSize: fontSize,
              },
            }}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </Grid>
        {/* おところ */}
        <Grid
          item
          style={{
            width: gridWidth, 
            margin: gridMargin,
          }}
        >
          <TextField 
            id="outlined-basic-size-normal" 
            label="おところ" 
            variant="outlined" 
            InputProps={{
              style: {
                fontSize: fontSize,
              },
            }}
            onChange={(e)=>{setAddress(e.target.value)}}
          />
        </Grid>
        {/* うまれたひ */}
        <Grid
          item
          style={{
            width: gridWidth, 
            margin: gridMargin,
          }}
        >
          <TextField 
            id="outlined-basic-size-normal" 
            label="うまれたひ" 
            variant="outlined" 
            InputProps={{
              style: {
                fontSize: fontSize,
              },
            }}
            onChange={(e)=>{setDate_of_birth(e.target.value)}}
          />
        </Grid>
        {/* 性別 */}
        <Grid
          item
          style={{
            width:gridWidth, 
            margin: gridMargin,
          }}
        >
          <TextField 
            id="outlined-basic-size-normal" 
            label="せいべつ" 
            variant="outlined"
            InputProps={{
              style: {
                fontSize: fontSize,
              },
            }}
            onChange={(e)=>{setGender(e.target.value)}}
          />
        </Grid>
        {/* 自己紹介 */}
        <Grid
          item
          style={{
            width:gridWidth, 
            margin: gridMargin,
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="じこしょうかい"
            multiline
            maxRows={10}
            rows={5}
            InputProps={{
              style: {
                fontSize: fontSize,
              },
            }}
            onChange={(e)=>{setSelf_introduction(e.target.value)}}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        style={{
          fontSize: fontSize,
          backgroundColor: '#C7D6F4',
          color: 'black',
        }}
        onClick={() => { DataRegistration() }}
      >とうろく</Button>
    </>
  )
}

export default Login;