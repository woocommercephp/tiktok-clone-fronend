import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter({ channel,description,song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          {/* <Ticker mode="smooth"
            className="ticker"
          >
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker> */}
        </div>
      </div>
      <img
        className="videoFooter__record"
        // src="https://media.tenor.com/images/d4e513c374f4c579e64e213b6b6fa1b1/tenor.gif"
        src="https://lh3.googleusercontent.com/ogw/ADGmqu8cUDGN5nCUe9PfFBpfTZWkvGqGN7J6Z1s_3DpfdQ=s83-c-mo"
        alt="dancing"
      />
    </div>
  );
}

export default VideoFooter;
