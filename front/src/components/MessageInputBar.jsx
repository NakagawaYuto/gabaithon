import '../css/messageInput.scss';
import { ReactComponent as PaperPlaneIcon } from '../icon/paperPlane.svg';
import { useState } from 'react';

import {
  TextField,
} from '@mui/material';

import MicButton from './MicButton';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

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
    <>
      <div className="message-input-container">
        <MicButton handleIsMicOn={handleIsMicOn}/>
        <TextField
          id="outlined-multiline-flexible"
          className="text"
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
    </>
  )
}

export default MessageInput;