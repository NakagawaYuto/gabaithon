import * as React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  Collapse,
} from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

import JijiBabaCard from '../components/JijiBabaCard';


const HogosyaHome = () => {
  const baseURL = "http://localhost:3000/elderly_people/"
  const navigate = useNavigate();
  const [jijiBabaLists, setJijiBabaLists] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleSelect = (event, index) => {
    setSelectedIndex(index);
  }

  const handleListClick = (event, index) => {
    navigate('/chat/'+String(index));
  }

  // 初回ロード時の処理を記述する.
  React.useEffect(() => 
    {
      axios.get(baseURL).then((response) => {
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
      <Grid container alignItems='center' justify='center' direction="column">
        <TransitionGroup>{generate()}</TransitionGroup>
      </Grid>
    </>
  )
}

export default HogosyaHome;