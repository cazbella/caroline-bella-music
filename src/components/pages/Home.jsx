import React from "react";

function Home() {
  return (
    <div>
      {/* Your other content */}
      <iframe
        title="Spotify Player"
        src="https://open.spotify.com/embed/track/2s3gPILqvdL6mRQH3xfpdV?utm_source=generator"
        width="100%"
        height="150"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ marginTop: '10px' }}
      ></iframe>
    </div>
  );
}

export default Home;
