import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  CalendarS,
  Table,
  Td_ThisMoon,
  Td_ElseMoon,
  Tr_Header,
} from "./calendarStyled";

const Calendar = (props) => {
  const [moon, setMoon] = useState(0);

  const current = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + moon
  );
  const lastDay = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + moon + 1,
    0
  ).getDate();
  const lastDayPrevMoon = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + moon,
    0
  ).getDate();

  const nameMoon = new Date(current).toLocaleString("ua", { month: "long" });

  const ROWS = 6,
    COLUM = 7;

  let table = [],
    tr,
    startDay = 1 - ((current.getDay() + 6) % 7),
    endCalendar = 1;

  // searchMovies
  const searchMovies = (e) => {
    props.setDateSerial({
      year: current.getFullYear(),
      moon: current.getMonth(),
      day: Number(e.target.textContent),
    });
  };
  for (let i = 0; i < ROWS; i++) {
    tr = [];
    for (let j = 0; j < COLUM; j++) {
      if (startDay > 0 && startDay <= lastDay)
        tr.push(
          <Td_ThisMoon key={startDay} onClick={(e) => searchMovies(e)}>
            <div>
              <Link to='serial'>{startDay}</Link>
            </div>
          </Td_ThisMoon>
        );
      else if (startDay <= lastDay) {
        tr.push(
          <Td_ElseMoon key={startDay}>
            <div>{lastDayPrevMoon + startDay}</div>
          </Td_ElseMoon>
        );
      } else {
        tr.push(
          <Td_ElseMoon key={startDay}>
            <div>{endCalendar}</div>
          </Td_ElseMoon>
        );
        endCalendar++;
      }

      startDay++;
    }
    if (startDay <= lastDay + 7) table.push(<tr key={i + startDay}>{tr}</tr>);
  }
  // new moon calender
  const newMoon = (btnMoon) => {
    btnMoon === "next"
      ? setMoon((prev) => prev + 1)
      : setMoon((prev) => prev - 1);
  };
  return (
    <CalendarS>
      <Table>
        <thead>
          <Tr_Header>
            <th>
              <div>
                <button
                  onClick={() => {
                    newMoon("prev");
                  }}>
                  <AiOutlineLeft />
                </button>
              </div>
            </th>
            <th colSpan='5'>
              <div>
                <span>{nameMoon}</span>
              </div>
            </th>
            <th>
              <div>
                <button
                  onClick={() => {
                    newMoon("next");
                  }}>
                  <AiOutlineRight />
                </button>
              </div>
            </th>
          </Tr_Header>
        </thead>
        <tbody>{table}</tbody>
      </Table>
    </CalendarS>
  );
};
export default Calendar;
