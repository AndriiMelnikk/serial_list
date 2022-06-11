import React, { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  BlockListS,
  MoreText,
  SerialS,
  TextSerial,
  InfoSerial,
  ButtonAdd,
} from "./serialLIstStyled";

import ImgFilm from "../../img/movies.jpg";
import Loader from "../../component/module/Loader";

const SerialLIst = (props) => {
  let blockMoonMovies = props.allMovies.map((e, index) => {
    return (
      <BlockList
        key={index}
        movies={e.movies}
        date={e.date}
        number={e.number}
        moviesTop={props.getMoviesTop}
        moviesAll={props.getMoviesAll}
      />
    );
  });

  const addMovies = () => {
    let prevDate = new Date(
      props.dataMovies.date.year,
      props.dataMovies.date.moon,
      props.dataMovies.date.day - 1
    );
    console.log(prevDate);
    props.setDateSerial({
      year: prevDate.getFullYear(),
      moon: prevDate.getMonth(),
      day: prevDate.getDate(),
    });
  };

  return (
    <div>
      {props.loader ? <Loader /> : blockMoonMovies}
      <ButtonAdd>
        <button onClick={addMovies}>Завантажити ще</button>
      </ButtonAdd>
    </div>
  );
};

const BlockList = (props) => {
  const [visibleP, serVisibleP] = useState([]);

  const movies = props.movies.map((e) => {
    return <Serial key={e.id} show={e} />;
  });

  const visibleMovies = () => {
    visibleP[1] ? props.moviesAll(props.date) : props.moviesTop(props.date);
  };

  useEffect(() => {
    if (props.number > 3) {
      serVisibleP([
        <span>
          Ще {props.number} фільмів <AiOutlineDown />
        </span>,
        true,
      ]);
    } else if (props.number === 3) {
      serVisibleP([
        <span>
          Сховати <AiOutlineUp />
        </span>,
        false,
      ]);
    } else {
      serVisibleP([<span></span>, false]);
    }
  }, [props.movies]);

  return (
    <BlockListS>
      <h2>{props.date}</h2>
      <ul>{movies}</ul>
      <MoreText>
        <p onClick={visibleMovies}>{visibleP[0]}</p>
      </MoreText>
    </BlockListS>
  );
};

const Serial = ({ show }) => {
  return (
    <SerialS>
      <div>
        <img
          src={show.show.image ? show.show.image.medium : ImgFilm}
          alt='movies'
        />
      </div>
      <TextSerial>
        <div>
          <h3>{show.show.name}</h3>
          <p>{show.show.premiered}</p>
        </div>
        <InfoSerial>
          <p>
            Cезон: <span>{show.season}</span>
          </p>
          <p>
            Частина: <span>{show.number}</span>
          </p>
        </InfoSerial>
      </TextSerial>
    </SerialS>
  );
};

export default SerialLIst;
