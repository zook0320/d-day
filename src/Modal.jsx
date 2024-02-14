import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Modal() {
  let now_utc = Date.now(); // 지금 날짜를 밀리초로
  // getTimezoneOffset()은 현재 시간과의 차이를 분 단위로 반환
  let timeOff = new Date().getTimezoneOffset() * 60000; // 분단위를 밀리초로 변환
  // new Date(now_utc-timeOff).toISOString()은 '2022-05-11T18:09:38.134Z'를 반환
  let today1 = new Date(now_utc - timeOff).toISOString().split("T")[0];
  // document.getElementById("Date").setAttribute("max", today);

  //useState 훅을 사용하여 상태를 관리한다
  const [dayTitle, setDayTitle] = useState(); //기념일 입력값 상태
  const [dDayType, setDdayType] = useState("pastDay"); //드롭다운 선택값 상태
  const [dDay, setDday] = useState();

  //useEffect 훅을 사용하여 드롭다운 선택값이 변경 될 때마다 작업을 수행한다
  useEffect(() => {
    let today;
    let inputDate;
    let time;
    if (dDayType === "pastDay") {
      today = new Date(); //오늘 날짜를 가져옴
      inputDate = new Date(dDay); //사용자가 입력한 날짜를 가져옴
      time = inputDate - today; //오늘 입력한 날짜 시간 차이
    } else if (dDayType === "futureDay") {
      today = new Date();
      inputDate = new Date(dDay);
      time = today - inputDate;
    }
    console.log(inputDate);
    console.log(today);
    console.log(time);
  }, [dDayType]);

  useEffect(() => {
    setDday(today1); // 현재 날짜를 추적하도록 설정
  }, [today1]);

  return (
    <div>
      <form>
        <p>
          <Input type="text" placeholder="기념일 입력" value={dayTitle} />
        </p>
        <p>
          <select
            name="dDayType"
            onChange={(e) => {
              setDdayType(e.target.value);
            }}>
            <option value="pastDay">날짜수</option>
            <option value="futureDay">디데이</option>
          </select>
        </p>
        <p>
          {dDayType === "pastDay" ? (
            <input
              type="date"
              max={today1}
              // value={dDay}
              onChange={(e) => {
                console.log(e.target.value);
                setDday(e.target.value);
              }}
            />
          ) : (
            <input
              type="date"
              min={today1}
              // value={dDay}
              onChange={(e) => {
                console.log(e.target.value);
                setDday(e.target.value);
              }}
            />
          )}
        </p>
        <button type="submit">디데이 생성 ✅</button>
      </form>
    </div>
  );
}

const Input = styled.input``;

export default Modal;
