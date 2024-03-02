import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(
  {
    delTarget, 
    setDelTarget,
    deleteBlog,
  }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setDelTarget(null);
  };

  // delTargetが変更されたら，dialogを開く.
  React.useEffect(() => {
    if (delTarget !== null){
      setOpen(true);
    }
  }, [delTarget])

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"削除確認"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            投稿を削除しようとしています．本当に消しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> {
            deleteBlog(delTarget);
            handleClose()
          }}>削除します</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}