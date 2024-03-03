import React from 'react';
import "./Gallery.css";
import photo3 from "../../assets/images/Caroline-Bella/3.jpeg";
import photo4 from "../../assets/images/Caroline-Bella/4.jpeg";
import photo5 from "../../assets/images/Caroline-Bella/5.jpeg";
import photo6 from "../../assets/images/Caroline-Bella/6.jpeg";
import photo7 from "../../assets/images/Caroline-Bella/7.jpeg";
import photo8 from "../../assets/images/Caroline-Bella/8.jpeg";
import photo14 from "../../assets/images/Caroline-Bella/14.jpeg";
import photo15 from "../../assets/images/Caroline-Bella/15.jpeg";
import photo18 from "../../assets/images/Caroline-Bella/18.jpeg";
import photo19 from "../../assets/images/Caroline-Bella/19.jpeg";
import photo20 from "../../assets/images/Caroline-Bella/20.jpeg";
import photo21 from "../../assets/images/Caroline-Bella/21.jpeg";
import photo22 from "../../assets/images/Caroline-Bella/22.jpeg";
import photo24 from "../../assets/images/Caroline-Bella/24.jpeg";
import photo25 from "../../assets/images/Caroline-Bella/25.jpeg";
import photo26 from "../../assets/images/Caroline-Bella/26.jpeg";
import photo28 from "../../assets/images/Caroline-Bella/28.jpeg";
import photo30 from "../../assets/images/Caroline-Bella/30.jpeg";
import photo31 from "../../assets/images/Caroline-Bella/31.jpeg";
import photo32 from "../../assets/images/Caroline-Bella/32.jpeg";
import photo36 from "../../assets/images/Caroline-Bella/36.jpeg";
// import photo39 from "../../assets/images/Caroline-Bella/39.jpeg";
import photo40 from "../../assets/images/Caroline-Bella/40.jpeg";
// import photo41 from "../../assets/images/Caroline-Bella/41.jpeg";
// import photo42 from "../../assets/images/Caroline-Bella/42.jpeg";
import photo43 from "../../assets/images/Caroline-Bella/43.jpeg";
// import photo44 from "../../assets/images/Caroline-Bella/44.jpeg";
import photo49 from "../../assets/images/Caroline-Bella/49.jpeg";
import photo50 from "../../assets/images/Caroline-Bella/50.jpeg";
import photo52 from "../../assets/images/Caroline-Bella/52.jpeg";
import photo53 from "../../assets/images/Caroline-Bella/53.jpeg";
import photo55 from "../../assets/images/Caroline-Bella/55.jpeg";
import photo56 from "../../assets/images/Caroline-Bella/56.jpeg";
// import photo58 from "../../assets/images/Caroline-Bella/58.jpeg";
import photo60 from "../../assets/images/Caroline-Bella/60.jpeg";
import photo61 from "../../assets/images/Caroline-Bella/61.jpeg";
import photo62 from "../../assets/images/Caroline-Bella/62.jpeg";
import photo63 from "../../assets/images/Caroline-Bella/63.jpeg";
import photo64 from "../../assets/images/Caroline-Bella/64.jpeg";
import photo66 from "../../assets/images/Caroline-Bella/66.jpeg";
// import photo67 from "../../assets/images/Caroline-Bella/67.jpeg";
// import photo68 from "../../assets/images/Caroline-Bella/68.jpeg";
// import photo69 from "../../assets/images/Caroline-Bella/69.jpeg";
import photo71 from "../../assets/images/Caroline-Bella/71.jpeg";
import photo72 from "../../assets/images/Caroline-Bella/72.jpeg";
import photo74 from "../../assets/images/Caroline-Bella/74.jpeg";
// import photo75 from "../../assets/images/Caroline-Bella/75.jpeg";
// import photo76 from "../../assets/images/Caroline-Bella/76.jpeg";

function Gallery() {
  return (
    <div className="projects-container">
      {/* <Header title="Photos and Video" /> */}
      <div className="container-fluid mb-4">
        <div className="content-container">
          <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={photo24} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src={photo3} className="d-block w-100" alt="Slide 3" />
              </div>
              <div className="carousel-item">
                <img src={photo4} className="d-block w-100" alt="Slide 4" />
              </div>
              <div className="carousel-item">
                <img src={photo5} className="d-block w-100" alt="Slide 5" />
              </div>
              <div className="carousel-item">
                <img src={photo6} className="d-block w-100" alt="Slide 6" />
              </div>
              <div className="carousel-item">
                <img src={photo7} className="d-block w-100" alt="Slide 7" />
              </div>
              <div className="carousel-item">
                <img src={photo8} className="d-block w-100" alt="Slide 8" />
              </div>
          
              <div className="carousel-item">
                <img src={photo14} className="d-block w-100" alt="Slide 14" />
              </div>
              <div className="carousel-item">
                <img src={photo15} className="d-block w-100" alt="Slide 15" />
              </div>
              <div className="carousel-item">
                <img src={photo18} className="d-block w-100" alt="Slide 18" />
              </div>
              <div className="carousel-item">
                <img src={photo19} className="d-block w-100" alt="Slide 19" />
              </div>
              <div className="carousel-item">
                <img src={photo20} className="d-block w-100" alt="Slide 20" />
              </div>
              <div className="carousel-item">
                <img src={photo21} className="d-block w-100" alt="Slide 21" />
              </div>
              <div className="carousel-item">
                <img src={photo22} className="d-block w-100" alt="Slide 22" />
              </div>
              <div className="carousel-item">
                <img src={photo24} className="d-block w-100" alt="Slide 24" />
              </div>
              <div className="carousel-item">
                <img src={photo25} className="d-block w-100" alt="Slide 25" />
              </div>
              <div className="carousel-item">
                <img src={photo26} className="d-block w-100" alt="Slide 26" />
              </div>
              <div className="carousel-item">
                <img src={photo28} className="d-block w-100" alt="Slide 28" />
              </div>
              <div className="carousel-item">
                <img src={photo30} className="d-block w-100" alt="Slide 30" />
              </div>
              <div className="carousel-item">
                <img src={photo31} className="d-block w-100" alt="Slide 31" />
              </div>
              <div className="carousel-item">
                <img src={photo32} className="d-block w-100" alt="Slide 32" />
              </div>
              <div className="carousel-item">
                <img src={photo36} className="d-block w-100" alt="Slide 36" />
              </div>
              {/* <div className="carousel-item">
                <img src={photo39} className="d-block w-100" alt="Slide 39" />
              </div> */}
              <div className="carousel-item">
                <img src={photo40} className="d-block w-100" alt="Slide 40" />
              </div>
              {/* <div className="carousel-item">
                <img src={photo41} className="d-block w-100" alt="Slide 41" />
              </div> */}
              {/* <div className="carousel-item">
                <img src={photo42} className="d-block w-100" alt="Slide 42" />
              </div> */}
              <div className="carousel-item">
                <img src={photo43} className="d-block w-100" alt="Slide 43" />
              </div>
              {/* <div className="carousel-item">
                <img src={photo44} className="d-block w-100" alt="Slide 44" />
              </div> */}
              <div className="carousel-item">
                <img src={photo49} className="d-block w-100" alt="Slide 49" />
              </div>
              <div className="carousel-item">
                <img src={photo50} className="d-block w-100" alt="Slide 50" />
              </div>
              {/* <div className="carousel-item">
                <img src={photo51} className="d-block w-100" alt="Slide 51" />
              </div> */}
              <div className="carousel-item">
                <img src={photo52} className="d-block w-100" alt="Slide 52" />
              </div>
              <div className="carousel-item">
                <img src={photo53} className="d-block w-100" alt="Slide 53" />
              </div>
              <div className="carousel-item">
                <img src={photo55} className="d-block w-100" alt="Slide 55" />
              </div>
              <div className="carousel-item">
                <img src={photo56} className="d-block w-100" alt="Slide 56" />
              </div>
              {/* <div className="carousel-item">
                <img src={photo58} className="d-block w-100" alt="Slide 58" />
              </div> */}
              <div className="carousel-item">
                <img src={photo60} className="d-block w-100" alt="Slide 60" />
              </div>
              <div className="carousel-item">
                <img src={photo61} className="d-block w-100" alt="Slide 61" />
              </div>
              <div className="carousel-item">
                <img src={photo62} className="d-block w-100" alt="Slide 62" />
              </div>
              <div className="carousel-item">
                <img src={photo63} className="d-block w-100" alt="Slide 63" />
              </div>
              <div className="carousel-item">
                <img src={photo64} className="d-block w-100" alt="Slide 64" />
              </div>
              <div className="carousel-item">
                <img src={photo66} className="d-block w-100" alt="Slide 66" />
              </div>
              {/* <div className="carousel-item">
                <img src={photo67} className="d-block w-100" alt="Slide 67" />
              </div> */}
              {/* <div className="carousel-item">
                <img src={photo68} className="d-block w-100" alt="Slide 68" />
              </div> */}
              {/* <div className="carousel-item">
                <img src={photo69} className="d-block w-100" alt="Slide 69" />
              </div> */}
              <div className="carousel-item">
                <img src={photo71} className="d-block w-100" alt="Slide 71" />
              </div>
              <div className="carousel-item">
                <img src={photo72} className="d-block w-100" alt="Slide 72" />
              </div>
              {/* <div className="carousel-item">
                <img src={photo74} className="d-block w-100" alt="Slide 74" />
              </div>
              <div className="carousel-item">
                <img src={photo75} className="d-block w-100" alt="Slide 75" />
              </div> */}
              {/* <div className="carousel-item">
                <img src={photo76} className="d-block w-100" alt="Slide 76" />
              </div> */}
              {/* <div className="carousel-item">
                <img src={photo77} className="d-block w-100" alt="Slide 77" />
              </div> */}
              {/* Add more images as needed */}
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
