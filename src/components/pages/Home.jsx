import React from "react";
import homeImage from "../../assets/images/Caroline-Bella/beach.jpeg";
import "./Home.css";
import FacebookFeed from "../layout/facebookfeed";

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
          style={{ marginTop: '30px', marginBottom: '-50px' }}
        ></iframe>
        <iframe
          title="Spotify Player"
          src="https://open.spotify.com/embed/album/44wQo40Fk9xXBkNvSE3wE1?utm_source=generator"
          width="100%"
          height="150"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <div>
        <img src={homeImage} alt="Caroline on the Beach" style={{ maxWidth: '100%' }} className="beach" />
      </div>

    </div>
  );
}

export default Home;
