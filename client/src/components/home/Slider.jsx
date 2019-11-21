import React from "react"

const Slider = () => {
    return(
        <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.pixabay.com/photo/2016/01/10/21/05/mic-1132528__480.jpg"
              className="d-block w-100"
              className="pic-slide"
              alt="..."
            />
            <h1>
              Welcome to Instrument
              <span style={{ color: "gold" }}>2.0</span>
            </h1>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2018/06/30/09/29/music-3507317__480.jpg"
              className="d-block w-100"
              className="pic-slide"
              alt="..."
            />
            <h1>Explore the real mood of music.</h1>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/22/19/15/dark-1850120__480.jpg"
              className="d-block w-100"
              className="pic-slide"
              alt="..."
            />
            <h1>Playing Instruments made easier.</h1>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Slider