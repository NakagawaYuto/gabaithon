// 外部ライブラリ
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// mui
import {
  Grid,
  Button
} from '@mui/material';



const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{width:'100%', height: '100vh'}}
      >
        <Grid 
          item 
          style={{
            width:'45%', 
            height: '150px',
            margin: '3px',
          }}
        >
          <Button 
            variant="contained"
            style={{
              backgroundColor: '#C7D6F4', 
              width: '100%',
              height: '100%',
              color: 'black',
              fontSize: '30px',
            }}
            onClick={() => { navigate('/login-g')}}
          >じぃじ<br/>ばぁば</Button>
        </Grid>
        <Grid 
          item
          style={{
            width:'45%', 
            height: '150px',
            margin: '3px',
          }}
        >
        <Button 
          variant="contained"
          style={{
            backgroundColor:'#EED1A6', 
            width: '100%',
            height: '100%',
            color: 'black',
            fontSize: '30px',
          }}
          onClick={() => { navigate('/login-p')}}
        >ほごしゃ</Button>
        </Grid>
      </Grid>
    </>
  );
};


export default Home;