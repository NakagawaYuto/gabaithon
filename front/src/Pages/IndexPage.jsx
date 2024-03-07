// 外部ライブラリ
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// mui
import {
  Grid,
  Button
} from '@mui/material';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        css={css`
          width: 100%;
          height: 100vh;
        `}
      >
        <Grid 
          item 
          css={css`
            width: 45%;
            height: 150px;
            margin: 3px;
          `}
        >
          <Button 
            variant="outlined"
            css={css`
              background-color: #c7d6f4;
              width: 100%;
              height: 100%;
              color: black;
              font-size: 30px;
              border-radius: 16px;
            `}
            onClick={() => { navigate('/login-g')}}
          >じぃじ<br/>ばぁば</Button>
        </Grid>
        <Grid 
          item
          css={css`
            width: 45%;
            height: 150px;
            margin: 3px;
          `}
        >
        <Button 
          variant="outlined"
          css={css`
            background-color: #EED1A6;
            width: 100%;
            height: 100%;
            color: black;
            font-size: 30px;
            border-radius: 16px;
          `}
          onClick={() => { navigate('/login-p')}}
        >ほごしゃ</Button>
        </Grid>
      </Grid>
    </>
  );
};


export default Home;