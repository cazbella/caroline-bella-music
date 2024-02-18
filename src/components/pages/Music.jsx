import React from "react";

function Music() {
  return (
    <div>
      {/* Your existing photo */}
      <img
        src="your-photo.jpg"
        alt="Your Photo"
        style={{ width: "100%", height: "auto", marginBottom: "20px" }}
      />
      {/* Embed SoundCloud Profile */}
      <div style={{ height: "400px", overflowY: "scroll" }}>
        <iframe
          title="SoundCloud Profile"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/carolinebellamusic&color=%234c4c4c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </div>
  );
}

export default Music;
