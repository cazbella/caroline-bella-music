import React from "react";

function Music() {
  return (
    <div style={{ height: "400px", overflowY: "scroll" , marginTop: '10px'}}>
      {/* Embed SoundCloud Profile */}
      <iframe
        title="SoundCloud Profile"
        width="100%"
        height="1000"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/carolinebellamusic&color=%234c4c4c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
  );
}

export default Music;
