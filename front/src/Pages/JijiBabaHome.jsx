import * as React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import {
  List,
  Collapse,
} from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

import ChildCard from '../components/ChildrenCard';


const JijiBabaHome = () => {
  const baseURL = "http://localhost:3000/elderly_people/"
  const navigate = useNavigate();
  const [childLists, setChildLists] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleSelect = (event, index) => {
    setSelectedIndex(index);
  }

  const handleListClick = (event, index) => {
    navigate('/chat/'+String(index));
  }

  // React.useEffect(() => {
  //   setChildLists([
  //     {
  //       'name':'あかさん', 
  //       'address': '住所', 
  //       'birthday': '2000/9/21', 
  //       'age': '10',
  //       'sex': '男', 
  //     },
  //     {
  //       'name':'あかんボウ', 
  //       'address': '住所', 
  //       'birthday': '2000/9/21', 
  //       'age': '10',
  //       'sex': '男', 
  //     },
  //     {
  //       'name':'あかちゃん', 
  //       'address': '住所', 
  //       'birthday': '2000/9/21', 
  //       'age': '10',
  //       'sex': '男', 
  //     },
  //   ]);
  // }, []);

  // 初回ロード時の処理を記述する.
  React.useEffect(() => 
    {
      axios.get(baseURL).then((response) => {
        setChildLists(response.data);
      });
    }, []);
  // if (!blogs) return null;

  const generate = () => {
    return childLists.map((value, index) => (
      <Collapse key={index}>
        <ChildCard 
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
      <List>
        <TransitionGroup>{generate()}</TransitionGroup>
      </List>
    </>
  )
}

export default JijiBabaHome;