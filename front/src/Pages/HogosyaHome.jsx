import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  List,
  Collapse,
} from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

import JijiBabaCard from '../components/JijiBabaCard';


const HogosyaHome = () => {
  const navigate = useNavigate();
  const [jijiBabaLists, setJijiBabaLists] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleSelect = (event, index) => {
    setSelectedIndex(index);
  }

  React.useEffect(() => {
    setJijiBabaLists([
      {
        'name':'おじいさん', 
        'address': '住所', 
        'birthday': '2000/9/21', 
        'age': '80',
        'sex': '男', 
        'message': '自己紹介文'
      },
      {
        'name':'おじいさん2', 
        'address': '住所', 
        'birthday': '2000/9/21', 
        'age': '80',
        'sex': '男', 
        'message': '自己紹介文'
      },
      {
        'name':'おじいさん3', 
        'address': '住所', 
        'birthday': '2000/9/21', 
        'age': '80',
        'sex': '男', 
        'message': '自己紹介文'
      },
    ]);
  }, []);

  const generate = () => {
    return jijiBabaLists.map((value, index) => (
      <Collapse key={index}>
        <JijiBabaCard 
          index={index} 
          value={value}
          handleSelect={handleSelect}
          selectedIndex={selectedIndex}
        />
      </Collapse>
    ))
  }

  return (
    <>
      <List>
        <TransitionGroup>{generate()}</TransitionGroup>
      </List>
    </>
  )
}

export default HogosyaHome;