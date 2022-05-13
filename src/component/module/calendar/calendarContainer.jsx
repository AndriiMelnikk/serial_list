import React from "react";
import { connect } from "react-redux";

import { setDateSerial } from "../../../redux/reducer/DataSerial";

import Calendar from "./calendar";

const CalendarComponent = (props) => {
  return <Calendar {...props} />;
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, { setDateSerial })(CalendarComponent);
