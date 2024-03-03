import * as React from 'react';
import { 
  useNavigate,
  useParams,
} from 'react-router-dom';

import { 
  Button,
} from '@mui/material';


const ChatPage = () => {
  const params = useParams();
  return(
    <>
      このChatPageは{params.id}番のページです．
    </>
  )
}

export default ChatPage;