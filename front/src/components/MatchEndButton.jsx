import * as React from 'react';

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

  const openDialog = () => {
    setOpen(true);
  }

  const handleClose = () => {
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
                onClick={handleClose}
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

