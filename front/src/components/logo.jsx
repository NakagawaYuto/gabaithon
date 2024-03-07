import {
  Avatar
} from '@mui/material';


const Logo = () => {
  return(
    <Avatar 
      sx={{
        position: 'fixed',
        bottom: 10,
        right: 10,
        bgcolor: '#d1abde',
        width: '100px',
        height: '100px',
      }} 
      src="/icons/logo2.png">
    </Avatar>
  )
}

export default Logo;
