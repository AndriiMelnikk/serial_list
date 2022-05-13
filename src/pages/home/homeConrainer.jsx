import React from "react";
import { connect } from "react-redux";

import { clearMovies } from "../../redux/reducer/DataSerial";

import Home from "./home";

const CalendarComponent = (props) => {
  console.log(props);
  return <Home />;
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, { clearMovies })(CalendarComponent);
