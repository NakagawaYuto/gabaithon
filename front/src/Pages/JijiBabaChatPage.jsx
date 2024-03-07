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

const JijiBabaChatPage = () => {
  const params = useParams();
  const [talklog, setTalkLog] = React.useState([]);

  React.useEffect(() => {
    //ここでtalklogをDBから取得
    handleGetMessage()
  }, [])

  const handleSendMessage = async (message) => {
    const baseURL = 'http://localhost:3000/';
    
    try {
      // axios post
      await axios.post(baseURL + 'chats', {
        chats: {
          eldery_person_id: 1,
          parent_id: 1,
          speaker: "elderly_person",
          message_content: message
        }
      })
      .then((e)=> {
        console.log(e)
        setTalkLog([...talklog, {who: 'elderly_person', message_text: message}])
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  async function handleGetMessage() {
    const baseURL = 'http://localhost:3000/'
    try {
      //axios get
      axios.get(baseURL + 'chats').then((response) => {
        console.log(response.data);
        let logs = []
        response.data.forEach((element) => {
          logs.push({who: element.speaker, message_text: element.message_content})
        });
        setTalkLog(logs)
          
      })
    }
    catch (error) {
      console.log(error);
      return 0
    }
  }

  return(
    <>
      {/* このChatPageは{params.id}番のページです． */}
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
          <TalkLog talklog={talklog} speaker={'elderly_person'}/>
        </Grid>
        <Grid item>
          <MessageInput onSendMessage={handleSendMessage}/>
        </Grid>
      </Grid>
      <MatchEndButton/>
    </>
  )
}

export default JijiBabaChatPage;