import React, { useState } from "react";
import "./guest-counter.scss";
import { IconButton } from "@material-ui/core/";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const GuestCounter = ({ title, subtitle }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="guest mb-3">
      <div className="guest__info mr-3">
        <div className="guest__infoType">{title}</div>
        <div className="guest__infoAge">{subtitle}</div>
      </div>
      <div className="guest__counter ml-3">
        <IconButton
          color="default"
          aria-label="close"
          onClick={() => setCount(count - 1)}
        >
          <RemoveIcon />
        </IconButton>
        <h5 className="mx-3 px-2">{count}</h5>
        <IconButton
          color="default"
          aria-label="close"
          onClick={() => setCount(count + 1)}
        >
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default GuestCounter;
