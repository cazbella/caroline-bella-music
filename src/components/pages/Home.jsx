import React from "react";
import homeImage from "../../assets/images/Caroline-Bella/beach.jpeg";
import "./Home.css";


function Home() {
  return (
    <div>
      <div>
      <iframe
        title="Spotify Player"
        src="https://open.spotify.com/embed/track/2s3gPILqvdL6mRQH3xfpdV?utm_source=generator"
        width="100%"
        height="150"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ marginTop: '30px' }}
      ></iframe>
      </div>
      <div>
        <img src= {homeImage} alt="Caroline on the Beach" style={{ maxWidth: '100%' }} className="beach" />
      </div>
    </div>
  );
}

export default Home;
