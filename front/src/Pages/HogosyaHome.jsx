import * as React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  Collapse,
} from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

import JijiBabaCard from '../components/JijiBabaCard';
import AppBarSimple from '../components/AppBarSimple';

const HogosyaHome = () => {
  const baseURL = "http://localhost:3000/"
  const navigate = useNavigate();
  const [jijiBabaLists, setJijiBabaLists] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const apply = () => {
    axios.post(baseURL+"evaluations", {
      evaluations:{
        elderly_person_id : 1,
        parent_id : 1,
        evaluation : 0,  // ここは入力された値
      }
    })
  }
  const handleSelect = (event, index) => {
    setSelectedIndex(index);
  }

  const handleListClick = (event, index) => {
    apply();
    navigate('/chat-p/'+String(index));
  }

  // 初回ロード時の処理を記述する.
  React.useEffect(() => 
    {
      axios.get(baseURL+"elderly_people/").then((response) => {
        setJijiBabaLists(response.data);
      });
    }, []);
  // if (!blogs) return null;

  const generate = () => {
    return jijiBabaLists.map((value, index) => (
      <Collapse key={index}>
        <JijiBabaCard 
          index={index} 
          value={value}
          handleSelect={handleSelect}
          selectedIndex={selectedIndex}
          handleListClick={handleListClick}
        />
      </Collapse>
    ))
  }


  return (
    <>
      <AppBarSimple/>
      <Grid 
        container 
        alignItems='center' 
        justify='center' 
        direction="column"
        sx={{marginTop: '70px'}}
      >
        <TransitionGroup>{generate()}</TransitionGroup>
      </Grid>
    </>
  )
}

export default HogosyaHome;