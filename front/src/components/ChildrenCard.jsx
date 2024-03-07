import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';

const ChildCard = ({ ChildList }) => {

  React.useEffect(() => {
    console.log(ChildList);
  },  [ChildList]
  );



  const navigate = useNavigate();
  var Cards = [];
  for (let i = 0; i < ChildList.length; i++) {
    const children = ChildList[i]; // 保護者1人当たりの子供全員
    const children_parent_id = children[0].parent_id
    const num_of_child = "子供の人数: "+String(children.length)
    let child_age_string = "";  // "2, 3"のように子供全員の年齢を表示する
    let child_gender_string = ""  // "male, female"のように子供全員の性別を表示する
    for (let j = 0; j < children.length; j++) {
      child_age_string += String(children[j].age)+", ";
      child_gender_string += String(children[j].gender)+", ";
    }
    Cards.push(
      <Grid item key={children_parent_id}>
        <Card 
          sx={{ 
            width: '70vw',
            borderRadius:'16px' 
          }} 
          elevation={4} 
          style={{
            margin: 10,
          }}
        >
          <CardActionArea onClick={() => { navigate('/chat-g/'+String(children_parent_id));}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                { num_of_child }
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                { child_age_string }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { child_gender_string }
              </Typography>
            </CardContent>
          <CardActionArea 
            onClick={
              () => { navigate('/chat/'+String(children_parent_id));}}
          >
          <Grid 
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item>
              <IconButton>
                <Avatar 
                  sx={{ 
                    bgcolor: '#d1abde',
                    width: '80px',
                    height: '80px'
                  }} 
                  src="/icons/1.jpeg">
                  <PersonIcon 
                    style={{ 
                      color: 'white',
                    }} 
                  />
                </Avatar>
              </IconButton>
            </Grid>
            <Grid item>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  { num_of_child }
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  { child_age_string }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  { child_gender_string }
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
  return (
    <>
      <Grid 
        container 
        alignItems='center' 
        justify='center' 
        direction="column"
        sx={{marginTop: '70px'}}
      >
        { Cards }
      </Grid>
    </>
  )
}


export default ChildCard;