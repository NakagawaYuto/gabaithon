import '../css/messageInput.scss';
import { ReactComponent as PaperPlaneIcon } from '../icon/paperPlane.svg';
import { useState } from 'react';


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
        <input
          type="text"
          className='message-input'
          placeholder='メッセージを入力してください．．．'
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyPress}
        />
        <button className='send-button' onClick={handleSendMessage}>
          <PaperPlaneIcon className='send-button-icon' />
        </button>
      </div>
    </>
  )
}

export default MessageInput;