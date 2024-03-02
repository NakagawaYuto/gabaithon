import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

const CommentCards = ({ Comments }) => {
  var Typographys = [];
  for (let i = 0; i < Comments.length; i++) {
    const comment = Comments[i]
    Typographys.push(
      <Typography gutterBottom variant="h5" component="div" style={{fontSize: 18}}>
        { comment.comment }
      </Typography>
    );
  }
  return (
    <>
      {/* <Card container alignItems='center' justify='center' direction="column">
        { Typographys }
      </Card> */}
      <Card sx={{ maxWidth: 800 }} elevation={0} style={{margin: 30, width: '40%', backgroundColor: '#F5DEB3'}}>
        <CardContent>
          { Typographys }
        </CardContent>
      </Card>
    </>
  )
}


export default CommentCards;
