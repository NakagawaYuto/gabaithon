import * as React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const BlogCards = ({ Blogs, delTarget }) => {
  var Cards = [];
  for (let i = 0; i < Blogs.length; i++) {
    const blog = Blogs[i]
    Cards.push(
      <Grid item key={blog.id}>
        <Card sx={{ width: '60vw' }}  elevation={4} style={{margin: 10}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { blog.title }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { blog.body }
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* <Grid item>
                <IconButton
                  aria-label="edit"
                  size="inherit"
                  style={{ 
                    background: '#4db6ac', 
                    margin:5,
                    boxShadow: '2px 2px 2px rgba(0,0,0,0.3)'
                  }}
                >
                <EditIcon 
                  fontSize='large'
                  style={{ color: '#eceff1' }}
                />
                </IconButton>
              </Grid> */}
              <Grid item> 
                <IconButton 
                  aria-label="delete" 
                  size="inherit"
                  style={{ 
                    background: '#8d6e63', 
                    margin:5,
                    boxShadow: '2px 2px 2px rgba(0,0,0,0.3)'
                  }}
                  onClick={() => {
                    delTarget(blog.id);
                  }}
                >
                  <DeleteIcon 
                    fontSize="large"
                    style={{ color: '#eceff1' }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    );
  }
  return (
    <>
      <Grid container alignItems='center' justify='center' direction="column">
        { Cards }
      </Grid>
    </>
  )
}


export default BlogCards;
