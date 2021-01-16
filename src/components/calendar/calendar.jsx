import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.scss";
import { IconButton } from "@material-ui/core/";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const CustomCalendar = ({ title, closeButtonClicked }) => {
  const [value, onChange] = React.useState(new Date());
  return (
    <div className="calendar p-4 mt-2">
      <div className="calendar__header px-2">
        <p>{`${title} date`}</p>
        <IconButton
          color="default"
          aria-label="close"
          onClick={closeButtonClicked}
        >
          <HighlightOffIcon />
        </IconButton>
      </div>

      <Calendar className="mt-2" onChange={onChange} value={value} />
    </div>
  );
};

export default CustomCalendar;
