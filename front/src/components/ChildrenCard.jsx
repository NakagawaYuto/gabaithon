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

const ChildCard = ({ ChildList, ParentList }) => {

  React.useEffect(() => {
    console.log(ChildList);
  },  [ChildList]
  );



  const navigate = useNavigate();
  var Cards = [];
  for (let i = 0; i < ChildList.length; i++) {
    const children = ChildList[i]; // 保護者1人当たりの子供全員
    const children_parent_id = children[0].parent_id
    let parent_name = ""
    // 親の名前を取得
    console.log(ParentList)
    for (let j = 0; j < ParentList.length; j++) {
      if (children_parent_id===ParentList[j].id) {
        parent_name = ParentList[j].name;
      }
    }
    const num_of_child = "子供の人数: "+String(children.length)+"人"
    let child_age_string = "";  // "2, 3"のように子供全員の年齢を表示する
    let child_gender_string = ""  // "male, female"のように子供全員の性別を表示する
    for (let j = 0; j < children.length; j++) {
      child_age_string += String(children[j].age)+"歳, ";
      child_gender_string += String(children[j].gender) === "Male" ? "男性, " : "女性, ";
    }
    const iconurl = "/icons/child_" + String(i % 5 + 1) + ".jpeg";
    Cards.push(
      <Grid item key={children_parent_id}>
        <Card 
          sx={{ 
            width: '70vw',
            borderRadius:'16px',
            //background: "linear-gradient(to left, #e66465, #9198e5)",
          }} 
          elevation={4} 
          style={{
            margin: 10,
          }}
        >
          <CardActionArea onClick={() => { navigate('/chat-g/'+String(children_parent_id));}}>
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
                      width: '100px',
                      height: '100px'
                    }} 
                    src={iconurl}>
                    <PersonIcon 
                      style={{ 
                        color: 'white',
                      }} 
                    />
                  </Avatar>
                </IconButton>
              </Grid>
              <Grid item>
                <CardContent
                  sx={{color: 'black'}}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    { parent_name }
                  </Typography>
                  <Typography variant="body2">
                    { num_of_child }
                  </Typography>
                  <Typography variant="body2">
                    { child_age_string }
                  </Typography>
                  <Typography variant="body2">
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