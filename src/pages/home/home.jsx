import React from "react";
import CalendarComponent from "../../component/module/calendar/calendarContainer";

import TV_img from "../../img/tv.png";
import { HomeS, Header } from "./homeStyled";
const Home = () => {
  return (
    <HomeS>
      <Header>
        <div>
          <img src={TV_img} alt='tv' />
        </div>
        <div>
          <h3>
            Для отримання серіалів, будь ласка, оберіть необхідний місяць та
            число
          </h3>
        </div>
      </Header>
      <div>
        <CalendarComponent />
      </div>
    </HomeS>
  );
};
export default Home;
