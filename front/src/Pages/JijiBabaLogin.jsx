import * as React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  TextField,
  Button,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from '@mui/material';

import BirthDate from '../components/SelectBirthday'; 
import AppVarSimple from '../components/AppBarSimple';

const Login = ({showFlashAlert}) => {
  const baseURL = "http://localhost:3000/elderly_people/"
  const navigate = useNavigate();
  const gridWidth = '80%';
  const gridMargin = '20px';
  const fontSize = '30px';

  const [name, setName] = React.useState('はやお');
  const [address, setAddress] = React.useState('佐賀市');
  const [date_of_birth, setDate_of_birth] = React.useState('1920-01-01');
  const [gender, setGender] = React.useState('male');
  const [self_introduction, setSelf_introduction] = React.useState('よろしくお願いします！');

  const chekcValidate = () => {
    const cn = name !== '';
    const ca = address !== '';
    const cd = date_of_birth !== '';
    const cg = gender !== '';
    const cs = self_introduction !== '';
    const all = cn&&ca&&cd&&cg&&cs;
    return all;
  }

  const DataRegistration = async() =>{
    if (chekcValidate()===true) {
      await axios.post(baseURL, {
        elderly_people: {
          name: String(name),
          address: String(address),
          date_of_birth: date_of_birth, // 日付形式の確認が必要です（'YYYY-MM-DD'など）
          gender: String(gender),
          self_introduction: String(self_introduction),
        }
      })
      .then(()=> {
        navigate('/home-g');
        showFlashAlert('success', 'ろぐいん成功！');
      })
    }
    else {
      showFlashAlert('error', '入力不足です');
    }
  }

  return (
    <>
      <AppVarSimple/>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{width:'100%',marginTop: '70px'}}
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
            value={name}
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
            label="住所" 
            variant="outlined" 
            InputProps={{
              style: {
                fontSize: fontSize,
              },
            }}
            onChange={(e)=>{setAddress(e.target.value)}}
            value={address}
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
          <Typography 
            component="p"
            style = {{
              fontSize: fontSize,
            }}
          >
            生年月日
          </Typography>
          <BirthDate setBirth={setDate_of_birth}></BirthDate>
        </Grid>
        {/* 性別 */}
        <Grid
          item
          style={{
            width:gridWidth, 
            margin: gridMargin,
          }}
        >
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="male"
              onChange={(e) => setGender(e.target.value)}
              style = {{
                fontSize: fontSize,
              }}
            >
              <FormControlLabel 
                value="female" 
                control={<Radio />} 
                label="女性"
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: fontSize,
                  },
                }}
              />
              <FormControlLabel
                value="male" 
                control={<Radio />} 
                label="男性" 
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: fontSize,
                  },
                }}
              />
            </RadioGroup>
          </FormControl>
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
            label="自己紹介"
            multiline
            rows={5}
            InputProps={{
              style: {
                fontSize: fontSize,
              },
            }}
            value={self_introduction}
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