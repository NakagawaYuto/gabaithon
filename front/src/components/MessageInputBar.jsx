// import '../css/messageInput.scss';
import { ReactComponent as PaperPlaneIcon } from '../icon/paperPlane.svg';
import { useState } from 'react';

import {
  TextField,
} from '@mui/material';

import MicButton from './MicButton';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// color変数を宣言
const messageMainColor = '#f2f2f2';
const shadowColor = 'rgba(0, 0, 0, 0.1)';

const messageInputContainer = css`
  position: fixed;
  bottom: 50px;
  left:0px;
  width: 95%;
  margin: 2%;
  display: flex;
  align-items: center;
  // margin-left: -50px;
  // margin-top: 340px;
  // padding-top: 5px;
  // padding-bottom: 5px;
  // padding-right: 40px;
  // padding-left: 40px;
  background-color: ${messageMainColor};
  border: 1px solid #ccc;
  border-radius: 5px;

  /* 影を付ける */
  box-shadow: 0 2px 4px ${shadowColor};

  .message-input {
    flex: 1;
    padding: 5px;
    border: none;
    background-color: transparent;
    outline: none;
    width: 460px;
  }

  .send-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 5px;
    padding: 8px;
    padding-left: 8px; // iconが非対称であるため，微調整しているだけ
    padding-right: 11px; // iconが非対称であるため，微調整しているだけ
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  .send-button-icon {
    fill: whitesmoke;
  }
`;


function MessageInput({ onSendMessage }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [message, setMessage] = useState('');
  const [currentMessage, setcurrentMessage] = useState('');
  const [isMicOn, setIsMicOn] = useState(false);

  // 音声入力
  // if(isMicOn) {
  //   setMessage(transcript + currentMessage);
  // }

  // マイクのオンオフ(MicButton)
  const handleIsMicOn = (value) => {
    if (value){
      setcurrentMessage(message)
      resetTranscript()
    } else {
      setMessage(currentMessage + transcript)
      resetTranscript()
    }
    setIsMicOn(value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  }

  return (
    <div css={messageInputContainer}>
      <MicButton handleIsMicOn={handleIsMicOn}/>
      <TextField
        id="outlined-multiline-flexible"
        className='message-input'
        placeholder=""
        multiline
        maxRows={10}
        value={isMicOn ? currentMessage + transcript : message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyPress}
        fullWidth
        variant="outlined"
      />
      <button className='send-button' onClick={handleSendMessage}>
        <PaperPlaneIcon className='send-button-icon' />
      </button>
    </div>
  );
};

export default MessageInput;