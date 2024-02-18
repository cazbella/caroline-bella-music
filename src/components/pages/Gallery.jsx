import React from 'react';
// import Header from "../layout/Header";
import "./Media.css";


function Gallery() {
  return (
    <div className="projects-container">
      {/* <Header title="Photos and Video" /> */}
      <div className="container-fluid mb-4">
        <div className="content-container">
          <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src= {logo} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src= {bandBit} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src= {bandBit2} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src= {flutes} className="d-block w-100" alt="Slide 3" />
              </div>
              {/* Additional pictures */}
              <div className="carousel-item">
                <img src= {shaun} className="d-block w-100" alt="Slide 4" />
              </div>
              <div className="carousel-item">
                <img src= {tubaChris} className="d-block w-100" alt="Slide 5" />
              </div>
              <div className="carousel-item">
                <img src= {sax} className="d-block w-100" alt="Slide 6" />
              </div>
              <div className="carousel-item">
                <img src= {bass} className="d-block w-100" alt="Slide 7" />
              </div>
              <div className="carousel-item">
                <img src= {flutes2} 
                className="d-block w-100" alt="Slide 8" />
              </div>
              {/* Video slides */}
              {/* <div className="carousel-item">
                <video className="d-block w-100" controls>
                  <source src="path/to/your/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div> */}
              <div className="carousel-item">
                <div dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FBridgtownConcertShowBand%2Fvideos%2F312707531433249%2F&show_text=false&width=269&t=0" width="269" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>' }} />
              </div>
              {/* Add more images and videos as needed */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

