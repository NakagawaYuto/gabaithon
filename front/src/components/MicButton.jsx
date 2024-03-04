import '../css/messageInput.scss';
import { ReactComponent as PaperPlaneIcon } from '../icon/paperPlane.svg';
import { useState } from 'react';

import {
  TextField,
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// 音声認識スイッチ
function ListeningControl(isPushed){
  if (!isPushed){
    SpeechRecognition.startListening({ continuous: true });
    return true;
  } else {
    SpeechRecognition.stopListening();
    return false;
  }
}

// 音声認識ボタン
const MicButton = () => {
  const [isPushed, setMessage] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  return (
    <div className="mic-input-container">
      <button className='mic-button' onClick={() => setMessage(ListeningControl(isPushed))}>
        <MicIcon />
      </button>
      {/* <p>{transcript}</p> */}
    </div>
  );
};

export default MicButton;