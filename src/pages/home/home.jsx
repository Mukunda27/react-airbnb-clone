import React from "react";
import "./home.scss";
import Header from "../../components/header/header";
import { Button } from "@material-ui/core";
import Search from "../../components/search/search";
import Card from "../../components/card/card";
import { PLACE_DATA } from "./place-data";
import Footer from "../../components/footer/footer";

const HomePage = () => {
  const cards = [...PLACE_DATA];
  return (
    <div>
      <div className="banner">
        <Header />
        <Search />
        <div className="banner__content">
          <h1>Get out and stretch your imagination</h1>
          <Button className="px-3 mt-2"> Explore nearby stays </Button>
        </div>
      </div>
      <div className="places row">
        {cards.map((card) => {
          return (
            <div key={card.id} className="col-4 my-3">
              <Card
                placeInfo={{
                  imgSrc: card.src,
                  title: card.title,
                  desc: card.description,
                }}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
