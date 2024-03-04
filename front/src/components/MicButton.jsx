import '../css/messageInput.scss';
import { ReactComponent as PaperPlaneIcon } from '../icon/paperPlane.svg';
import { useState } from 'react';

import {
  TextField,
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

const MicButton = () => {
  return (
    <div className="mic-input-container">
        <button className='mic-button'>
            <MicIcon />
        </button>
    </div>
  );
};

export default MicButton;