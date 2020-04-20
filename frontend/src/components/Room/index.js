import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import Fab from "@material-ui/core/Fab";
import ForwardIcon from "@material-ui/icons/ArrowForward";
import BackIcon from "@material-ui/icons/ArrowBack";

// Componentss
import RoomItem from "components/RoomItem";

//styles
import styles from "./room.module.scss";

const RoomSelect = (props) => {
  useEffect(() => {
    let swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 30,
      grabCursor: true,
      mousewheel: true,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    console.log("Rooms", props.rooms);
  }, [props.rooms]);

  const { rooms } = props;
  return (
    <div className={styles.overflow}>
      <div className={[styles.container, "swiper-container"].join(" ")}>
        <div className={[styles.wrapper, "swiper-wrapper"].join(" ")}>
          {rooms &&
            rooms.data.map((item, index) => (
              <div key={index} className="swiper-slide">
                <RoomItem
                  name={item.name}
                  maxPlayerCount={item.maxPlayerCount}
                  playTime={item.playtime}
                  setupTime={item.setupTime}
                  minimumPlayerAge={item.minimumPlayerAge}
                  className={styles.slide}
                />
              </div>
            ))}
        </div>
      </div>
      <div className={styles.navigation}>
        <Fab className="swiper-button-prev" color="primary" aria-label="Back">
          <BackIcon />
        </Fab>
        <Fab
          className="swiper-button-next"
          color="primary"
          aria-label="Forward"
        >
          <ForwardIcon />
        </Fab>
      </div>
    </div>
  );
};

export default RoomSelect;
