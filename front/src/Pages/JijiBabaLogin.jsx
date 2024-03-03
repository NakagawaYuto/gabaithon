import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  TextField,
  Button,
} from '@mui/material';


const Login = () => {
  const navigate = useNavigate();
  const gridWidth = '80%';
  const gridMargin = '20px';
  const fontSize = '30px';
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
        onClick={() => { navigate('/home-g')}}
      >とうろく</Button>
    </>
  )
}

export default Login;