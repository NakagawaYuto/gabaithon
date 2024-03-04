import * as React from 'react';
import { 
  useNavigate,
  useParams,
} from 'react-router-dom';
import axios from "axios"

import { 
  Grid,
} from '@mui/material';

import MessageInput from '../components/MessageInputBar';
import TalkLog from '../components/TalkHistory';
import MatchEndButton from '../components/MatchEndButton';

const ChatPage = () => {
  const params = useParams();
  const [talklog, setTalkLog] = React.useState([]);

  React.useEffect(() => {
    //ここでtalklogをDBから取得
    setTalkLog([
      {who:'elder', message_text: 'こんにちは'},
      {who:'parent', message_text: 'こんにちは！'},
      {who:'elder', message_text: 'こんにちは'},
      {who:'parent', message_text: 'こんにちは！'},
      {who:'elder', message_text: 'こんにちは'},
      {who:'parent', message_text: 'こんにちは！'},
      {who:'elder', message_text: 'こんにちは'},
      {who:'parent', message_text: 'こんにちは！'},
    ])
  }, [])

  const handleSendMessage = async (message) => {
    const baseURL = 'http://localhost:3000/';
    try {
      // axios post
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleGetMessage = async () => {
    const baseURL = 'http://localhost:3000/'
    try {
      //axios get
    }
    catch (error) {
      console.log(error);
    }
  }

  return(
    <>
      このChatPageは{params.id}番のページです．
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{width:'100%'}}
      >
        <Grid
          item
          style={{
            width: '90%', 
            margin: 0,
            marginTop: '20px',
            padding: 0,
          }}
        >
          <TalkLog talklog={talklog}/>
        </Grid>
        <Grid item>
          <MessageInput onSendMessage={handleSendMessage}/>
        </Grid>
      </Grid>
      <MatchEndButton/>
    </>
  )
}

export default ChatPage;