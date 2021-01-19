import { IconButton } from "@material-ui/core";
import { Close, Favorite, FlashOn, Replay, StarRate } from "@material-ui/icons";
import React from "react";
import "./SwipeButtons.css";
function SwipeButtons() {
  const swiped = () => {};
  return (
    <div className="swipeButtons">
      <IconButton onClick={swiped} className="swipeButtons__repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons__left">
        <Close fontSize="large" />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons__star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons__right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons__lightning">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
