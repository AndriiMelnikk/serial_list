import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  getMoviesTop,
  getMoviesAll,
  setDateSerial,
  clearMovies,
} from "../../redux/reducer/DataSerial";
import SerialLIst from "./serialLIst";
const SerialLIstComponent = (props) => {
  console.log(props)
  useEffect(() => {
    return () => {
      props.clearMovies();
    };
  }, []);
  return <SerialLIst {...props} />;
};

const mapStateToProps = (state) => {
  return {
    allMovies: state.DataSerial.infoBlockMovies,
    numberMovies:
      state.DataSerial.movies.length - state.DataSerial.visibleTopMovies,
    loader: state.DataSerial.loader,
    dataMovies: state.DataSerial.dataMovies,
  };
};
export default connect(mapStateToProps, {
  getMoviesTop,
  getMoviesAll,
  setDateSerial,
  clearMovies,
})(SerialLIstComponent);
