import * as React from 'react';

import {
  Alert
} from '@mui/material';

const FlashAlert = ({
  severity,
  message,
  createdAt,
}) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const topPosition = '5%';
  React.useEffect(() => {
    // 初回実行防止
    if (createdAt === '0') {
      return;
    }
    let isMounted = true;
    setShowAlert(true);
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setShowAlert(false);
        console.log('endflashAlert')
      }
    }, 3000)
    console.log('flashAlert'+createdAt)
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [createdAt])
  return (
    <>
    {showAlert ? (
      <Alert 
        severity={severity}
        style={{
          position: 'fixed',
          top: topPosition,
          left: '50%',
          transform: 'translate(-50%, -' + topPosition + ')',
          margin: '0px',
          width: '80%',
          zIndex: 999,
        }}
      >
        {message}
      </Alert>
    ) : (<></>)
    }
    </>
  )
}

export default FlashAlert;
