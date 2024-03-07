import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import HeaderWithBackButton from '../components/AppBarSimple';

const Login = ({showFlashAlert}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = React.useState('てすとゆーざ');
  const [password, setPassword] = React.useState('nakayama7579');
  const gridWidth = '80%';
  const gridMargin = '20px';
  const fontSize = '30px';

  const checkLogin = () => {
    const valid_name = 'てすとゆーざ';
    const valid_password = 'nakayama7579'
    if (valid_name===name && valid_password===password) {
      showFlashAlert('success', 'ろぐいん成功！')
      navigate('/home-p')
    }
    else {
      showFlashAlert('error', 'おなまえ か ぱすわぁどがまちがってるよ')
    }
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderWithBackButton/>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          width:'100%',
          marginTop: '70px'
        }}
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
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Grid>
        {/* ぱすわーど */}
        <Grid
          item
          style={{
            width: gridWidth, 
            margin: gridMargin,
          }}
        >
          <FormControl variant="outlined">
            <InputLabel 
              htmlFor="outlined-adornment-password"
            >ぱすわぁど</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              style={{ fontSize: fontSize }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        style={{
          fontSize: fontSize,
          backgroundColor: '#C7D6F4',
          color: 'black',
        }}
        onClick={() => {checkLogin()}}
      >ろぐいん</Button>
    </>
  )
}

export default Login;