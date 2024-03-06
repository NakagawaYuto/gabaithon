import React, { useRef, useState, useEffect } from "react"; 

const BirthDate = ({setBirth}) => {
  const birthYearRef = useRef(null);
  const birthMonthRef = useRef(null);
  const birthDayRef = useRef(null);

  const [birthYear, setBirthYear] = useState();
  const [birthMonth, setBirthMonth] = useState();
  const [birthDay, setBirthDay] = useState();

  const setYear = () => {
    for (let i = 1920; i <= new Date().getFullYear(); i++) {
      const option = document.createElement('option');
      const date = new Date(Date.UTC(i));
      const jc = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {year: 'numeric'}).format(date);
      option.value = `${i}（${jc}）`;
      option.text = `${i}（${jc}）`;
      birthYearRef.current.appendChild(option);
    }
  }

  const setMonth = () => {
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement('option');
      const month =  i<10 ? '0' + String(i): String(i);
      option.value = month;
      option.text = month;
      birthMonthRef.current.appendChild(option);
    }
  }

  const setDay = () => {
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement('option');
      const day = i<10 ? '0' + String(i): String(i);
      option.value = day;
      option.text = day;
      birthDayRef.current.appendChild(option);
    }
  }

  const selectBirthYear = (e) => {
    setBirthYear(e.target.value);
    setBirth(
      String(e.target.value) + '-' +
      String(birthMonth) + '-' +
      String(birthDay) + '-'
    );
  }

  const selectBirthMonth = (e) => {
    setBirthMonth(e.target.value);
    setBirth(
      String(birthYear) + '-' +
      String(e.target.value) + '-' +
      String(birthDay) + '-'
    );
  }

  const selectBirthDay = (e) => {
    setBirthDay(e.target.value);
    setBirth(
      String(birthYear) + '-' +
      String(birthMonth) + '-' +
      String(e.target.value) + '-'
    );
  }

  useEffect(() => {
    setYear();
    setMonth();
    setDay();
  }, []);

  return (
    <div>
      <label style={{fontSize: '30px'}}>
        <select 
          ref={birthYearRef} 
          value={birthYear} 
          onChange={selectBirthYear}
          style={{fontSize: '30px'}}
        ></select>年
      </label>
      <label style={{fontSize: '30px'}}>
        <select 
          ref={birthMonthRef} 
          value={birthMonth} 
          onChange={selectBirthMonth}
          style={{fontSize: '30px'}}
        ></select>月
      </label>
      <label style={{fontSize: '30px'}}>
        <select 
          ref={birthDayRef} 
          value={birthDay} 
          onChange={selectBirthDay}
          style={{fontSize: '30px'}}
        ></select>日
      </label>
    </div>
  )
}

export default BirthDate;