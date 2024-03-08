import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ActionCable from 'actioncable';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  Rating,
} from '@mui/material';


const MatchEndButton = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const cable = React.useMemo(() => ActionCable.createConsumer('ws://localhost:3000/cable'), []);
  const [subscription, setSubscription] = React.useState();
  
  const baseURL = "http://localhost:3000/"

  React.useEffect(() => {
    const sub = cable.subscriptions.create({ channel: "RoomChannel" }, {
      received: (msg) => null
    });
    setSubscription(sub);
  }, [cable])

  const sendEvaluation = (elderly_person_id, parent_id) => {
    console.log("elderly_person_id : "+String(elderly_person_id));
    console.log("parent_id : "+String(parent_id));
    
    axios.put(baseURL+"evaluations/1/", {
      evaluations:{
        elderly_person_id : elderly_person_id,
        parent_id : parent_id,
        evaluation : value,  // ここは入力された値
      }
    }).then((e) => {
      navigate('/home-p/');
      subscription?.perform('room_end');
    })
  }

  const openDialog = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const finishChat = () => {
    sendEvaluation(1, 1);
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={openDialog}
        sx={{
          position: 'fixed',
          top: 10,
          right: 20,
          color: 'white',
          backgroundColor: 'red',
          width: '30%',
        }}
      >
        終了
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          sx={{
            fontSize: '1.5rem',
            margin: 'auto',
          }}
        >{"どうでしたか?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            これでやりとりは終了になります．
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid 
            item
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                fontSize: '2.5rem'
              }}
            />
          </Grid>
        </Grid>
        </DialogActions>
        <DialogActions>
          <Grid 
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
          >
            <Grid 
              item
              sx={{
                width: '40%'
              }}
            >
              <Button 
                onClick={finishChat}
                sx={{
                  color: 'black',
                  backgroundColor: 'pink',
                  width: '100%',
                }}
              >終了</Button>
            </Grid>
            <Grid 
              item
              sx={{
                width: '40%'
              }}
            >
              <Button 
                onClick={handleClose}
                sx={{
                  color: 'black',
                  backgroundColor: 'lightgreen',
                  width: '100%',
                }}
              >戻る</Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MatchEndButton;

