import React from "react";
import "./Gigs.css";
import Footer from "../layout/Footer";

function Gigs() {
  return (
    <div>
      <div className="video-wrapper">
        <iframe
          className="videoYoutube"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8-9v_etWR7U?si=WAhTZ0kPRxDLiXId"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-wrapper">
        <iframe
          className="videoYoutube"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kBJc4OAaT0A?si=evktlqlHhfML6l3u"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-wrapper">
        <iframe
          className="videoYoutube"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CV_WZ6E0T48?si=NgbpyzWU88Gfznv-"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
}

export default Gigs;
