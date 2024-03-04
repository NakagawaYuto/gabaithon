import '../css/messageInput.scss';
import { ReactComponent as PaperPlaneIcon } from '../icon/paperPlane.svg';
import { useState } from 'react';

import {
  TextField,
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


const MicButton = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  return (
    <div className="mic-input-container">
        <button className='mic-button' onClick={() => SpeechRecognition.startListening({ continuous: true })}>
            <MicIcon />
        </button>
        <button className='mic-button' onClick={() => SpeechRecognition.stopListening()}>
            <MicIcon />
        </button>
        <p>{transcript}</p>
    </div>
  );
};

export default MicButton;