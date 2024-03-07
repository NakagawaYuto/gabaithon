import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom'; // react-router-dom v6を想定
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const HeaderWithBackButton = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // ブラウザの履歴で一つ前に戻る
    //navigate('/');
  };

  return (
    <AppBar 
      position="fixed"
      elevation={1}
      css={css`
        top: 0;
        left: 0;
        right: 0;
        background-color: #d8ecf0;
        color: black;
        opacity: 0.7,
        height: 50px;
      `}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBack}>
          <ArrowBackIosIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderWithBackButton;
