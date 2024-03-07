import * as React from 'react';
import { 
  useNavigate,
  useParams,
} from 'react-router-dom';
import axios from "axios"
import ActionCable from 'actioncable';

import { 
  Grid,
} from '@mui/material';

import MessageInput from '../components/MessageInputBar';
import TalkLog from '../components/TalkHistory';

const JijiBabaChatPage = () => {
  const params = useParams();
  const [talklog, setTalkLog] = React.useState([]);
  const cable = React.useMemo(() => ActionCable.createConsumer('ws://localhost:3000/cable'), []);
  const [subscription, setSubscription] = React.useState();
  const [receivedMessage, setReceivedMessage] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    //ここでtalklogをDBから取得
    handleGetMessage()
  }, [])

  React.useEffect(() => {
    const sub = cable.subscriptions.create({ channel: "RoomChannel" }, {
      received: (msg) => setReceivedMessage(msg)
    });
    setSubscription(sub);
  }, [cable])

  React.useEffect(() => {
    if (!receivedMessage) return;
    console.log(receivedMessage.command)
    if (receivedMessage.command === "reload"){
      handleGetMessage()
    } else if (receivedMessage.command === "room_end"){
      navigate('/home-g/');
    } else {
      return;
    }
    
  }, [receivedMessage]);

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
        subscription?.perform('room_reload');
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
    </>
  )
}

export default JijiBabaChatPage;