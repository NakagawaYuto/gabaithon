import '../css/messageInput.scss';
import { ReactComponent as PaperPlaneIcon } from '../icon/paperPlane.svg';
import { useState } from 'react';

import {
  TextField,
} from '@mui/material';

function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

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
        <TextField
          id="outlined-multiline-flexible"
          className="text"
          placeholder=""
          multiline
          maxRows={10}
          value={message}
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