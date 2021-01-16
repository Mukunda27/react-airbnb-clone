import React, { useState } from "react";
import "./search.scss";
import CustomButton from "../button/button";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import CustomCalendar from "../calendar/calendar";
import GuestCounter from "../guest-counter/guest-counter";
import { IconButton } from "@material-ui/core/";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Search = () => {
  const [calendar, setCalendar] = useState(false);
  const [guestSelection, setGuestSelection] = useState(false);

  const [dateSelection, setDateSelection] = useState("");

  const showCalendar = () => {
    setCalendar(true);
  };

  const closeButtonClicked = () => {
    setCalendar(false);
  };

  return (
    <>
      <div className="search">
        <div className="search__inner">
          <div
            className="search__checkin"
            onClick={() => {
              setDateSelection("Check In");
            }}
          >
            <CustomButton handleClick={showCalendar}>
              <div className="pl-2 pr-4 text-left">
                <p className="search__title">Check In</p>
                <p className="search__subtitle">Add Dates</p>
              </div>
            </CustomButton>
          </div>
          <div
            className="search__checkout"
            onClick={() => {
              setDateSelection("Check Out");
            }}
          >
            <CustomButton handleClick={showCalendar}>
              <div className="pl-2 pr-4 text-left">
                <p className="search__title">Check Out</p>
                <p className="search__subtitle">Add DAtes</p>
              </div>
            </CustomButton>
          </div>
          <div
            className="search__guests"
            onClick={() => {
              setGuestSelection(true);
            }}
          >
            <CustomButton>
              <div className="pr-5 text-left pl-2">
                <p className="search__title">Guests</p>
                <p className="search__subtitle">Add Guests</p>
              </div>
            </CustomButton>
          </div>
          <div className="search-btn pr-2">
            <Button
              variant="contained"
              className="py-2"
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </div>
        </div>
        {calendar && (
          <CustomCalendar
            title={dateSelection}
            closeButtonClicked={closeButtonClicked}
          />
        )}
        {guestSelection && (
          <div className="guest__selection p-4 mt-2">
            <div className="guest__header">
              <p>{`Add Guests`}</p>
              <IconButton
                color="default"
                aria-label="close"
                onClick={() => setGuestSelection(false)}
              >
                <HighlightOffIcon />
              </IconButton>
            </div>
            <div className="mt-4">
              <GuestCounter title="Adult" subtitle="Age 13 or above" />
              <GuestCounter title="Children" subtitle="Age 2 - 12" />
              <GuestCounter title="Infants" subtitle="Age 2 or below" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
