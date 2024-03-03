import React from "react";
import "../../components/pages/Music.css";

function Music() {
  return (
    <div>
      {/* Embedded SoundCloud Tracks */}
      <div className="musicTrack">
        <iframe
          className="trackBox"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://www.youtube.com/embed/J845TEcF0Uo?si=VkeG-8eiTGMARG0u"
        ></iframe>
      </div>
      <div className="musicTrack">
        <iframe
          className="trackBox"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/86081576&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
      <div className="musicTrack">
        <iframe
          className="trackBox"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329355193&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
      <div className="musicTrack">
        <iframe
          className="trackBox"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://www.youtube.com/embed/ZaaWuXPRU6A?si=qzrSLWRQGcM7Ej4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      {/* Add more tracks as needed */}
    </div>
  );
}

export default Music;
