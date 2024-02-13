import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [anniversaries, setAnniversaries] = useState([]); //D-DAY목록
  const [inputValues, setInputValues] = useState({ title: '', date: '' }); //입력폼
  const [todayDate, setTodayDate] = useState(formatDate(new Date())); //현재날짜
  const [firstMeetDate, setFirstMeetDate] = useState('');  //처음만난 날
  const [firstMeetDays, setFirstMeetDays] = useState(0);  ///처음 만나 날로부터 경과하 일 수
  const [showModal, setShowModal] = useState(false); ///모달 표시여부
  const [showFirstMeetForm, setShowFirstMeetForm] = useState(false); //처음 만난 날 설정 폼 표시여부

  const addNewAnniversary = () => {
    if (inputValues.title && inputValues.date) {
      const selectedDate = new Date(inputValues.date).getTime();
      const today = new Date(todayDate).getTime();

      if (selectedDate >= today) {
        setAnniversaries((prevAnniversaries) => [
          ...prevAnniversaries,
          { title: inputValues.title, date: inputValues.date }
        ]);
        setInputValues({ title: '', date: '' });
        handleModalClose();
      } else {
        alert("날짜를 현재 날짜 이후로 선택해주세요.");
      }
    }
  };

  const setFirstMeet = (selectedDate) => {
    if (selectedDate) {
      const today = new Date(todayDate).getTime();
      const meetDay = new Date(selectedDate).getTime();
      const gap = today - meetDay;
      const daysDifference = Math.floor(gap / (1000 * 60 * 60 * 24));

      if (daysDifference >= 0) {
        setFirstMeetDate(selectedDate);
        setFirstMeetDays(daysDifference);
      } else {
        alert("날짜를 현재 날짜 이전으로 선택해주세요.");
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();

      setAnniversaries((prevAnniversaries) => {
        return prevAnniversaries.map((anniversary) => {
          const dday = new Date(anniversary.date).getTime();
          const gap = dday - now;

          return {
            ...anniversary,
            remainingTime: {
              days: Math.floor(gap / (1000 * 60 * 60 * 24)),
            },
          };
        });
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setFirstMeet(firstMeetDate);
  }, [firstMeetDate, todayDate]);

  const handleModalClose = () => {
    setShowModal(false);
    setInputValues({ title: '', date: '' });
    setShowFirstMeetForm(false);
  };

  return (
    <div className="app-container">

      <div className="day">
        <h3>오늘은 {todayDate}</h3>
        {firstMeetDate && <p>우리만난지 {firstMeetDays}일이 됐어요!</p>}
        <button onClick={() => setShowFirstMeetForm(true)}>처음 만난 날 설정</button>
  

        {showFirstMeetForm && (
          <div>
            <input type="date" value={firstMeetDate} onChange={(e) => setFirstMeetDate(e.target.value)} />
            <button onClick={() => { setFirstMeet(firstMeetDate); setShowFirstMeetForm(false); }}>확인</button>
          </div>
        )}
      <button onClick={() => setShowModal(true)}>New D-day</button>

        {anniversaries.map((anniversary, index) => (
          <div key={index} className="anniversary">
            <h3>{anniversary.title} D- {Math.max(0, anniversary.remainingTime?.days)}일</h3>
          </div>
        ))}

       


   

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>x</span>
              <h2>New D-day</h2>
              <input
                type="text"
                placeholder="기념일 제목"
                value={inputValues.title}
                onChange={(e) => setInputValues({ ...inputValues, title: e.target.value })}
              />
              <input
                type="date"
                value={inputValues.date}
                onChange={(e) => setInputValues({ ...inputValues, date: e.target.value })}
              />
              <button onClick={addNewAnniversary}>확인</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const formatDate = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};


export default App;
