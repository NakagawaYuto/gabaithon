import * as React from 'react';
import { 
  useNavigate,
  useParams,
} from 'react-router-dom';
import axios from "axios"

import { 
  Button,
} from '@mui/material';

import MessageInput from '../components/MessageInputBar';


const ChatPage = () => {
  const params = useParams();
  const [talklog, setTalkLog] = React.useState([]);

  React.useEffect(() => {
    //ここでtalklogをDBから取得
  }, [])

  const handleSendMessage = async (message) => {
    const baseURL = 'http://localhost:3000/';
    try {
      await axios.post(baseURL, {})
      .then(response => {
        handleGetMessage()
      })
      .catch(error => {
        console.log(error)
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleGetMessage = async () => {
    const baseURL = 'http://localhost:3000/'
    try {
      await axios.get(baseURL).then((response) => {
        setTalkLog(response.data);
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  return(
    <>
      このChatPageは{params.id}番のページです．
      <MessageInput onSendMessage={handleSendMessage}/>
    </>
  )
}

export default ChatPage;