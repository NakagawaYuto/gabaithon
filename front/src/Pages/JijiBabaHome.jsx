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
  const [parentList, setParentList] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL + 'evaluations').then((response) => {
      const filteredData = response.data.filter(evaluation => evaluation.elderly_person_id === elderly_person_id);
      for (let i = 0; i < filteredData.length; i++) {
        parent_id_list.push(filteredData[i].parent_id);
      }
      console.log(parent_id_list);
      return parent_id_list;
    })
    .then((parent_id_list)=>{
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
    })
    .then(()=>{
      const parent_list = [];
      axios.get(baseURL+"parents").then((response) => {
        console.log(response.data);
        setParentList(response.data); // parentListの更新
        console.log(parentList); // 更新されたparentListの値をログに出力
      });
    });
  }, []);

  return (
    <>
      <HeaderWithBackButton></HeaderWithBackButton>
      <ChildCard ChildList={childList} ParentList={parentList}></ChildCard>
    </>
  );
};

export default JijiBabaHome;
