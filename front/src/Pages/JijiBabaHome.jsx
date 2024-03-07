import * as React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


import ChildCard from '../components/ChildrenCard';
import HeaderWithBackButton from '../components/AppBarSimple';

const JijiBabaHome = () => {
  const baseURL = "http://localhost:3000/";
  const navigate = useNavigate();
  const [childList, setChildList] = React.useState([]); // childListを状態として管理する

  const elderly_person_id = 1;
  const parent_id_list = [];

  React.useEffect(() => {
    axios.get(baseURL + 'evaluations').then((response) => {
      const filteredData = response.data.filter(evaluation => evaluation.elderly_person_id === elderly_person_id);
      for (let i = 0; i < filteredData.length; i++) {
        parent_id_list.push(filteredData[i].parent_id);
      }
      console.log(parent_id_list);

      // 親のIDから子供のデータ取得
      axios.get(baseURL + "children").then((response) => {
        const allChildList = [];
        for (let j = 0; j < parent_id_list.length; j++) {
          const filteredData = response.data.filter(children => children.parent_id === parent_id_list[j]);
          allChildList.push(filteredData);
        }
        console.log(allChildList);
        setChildList(allChildList); // childListの更新
      });
    });
  }, []);

  return (
    <>
      <HeaderWithBackButton></HeaderWithBackButton>
      <ChildCard ChildList={childList}></ChildCard>
    </>
  );
};

export default JijiBabaHome;
