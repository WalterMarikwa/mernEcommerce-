import React from "react"

const Card = () => {
    return(
        <section id="cardbox">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://bit.ly/2TFgBKX"
                  width="80px"
                  height="200px"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Learn about music</h5>
                  <p className="card-text">
                    Music is an important part of people’s life and it should
                    stay like that. Well, after reading this article it will
                    probably become an even more important part of your life.{" "}
                  </p>
                  <a href="/home" className="btn btn-primary">
                    Home...
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://bit.ly/2yZZ3zR"
                  width="80px"
                  height="200px"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Follow your path</h5>
                  <p className="card-text">
                    Music has many benefits it provides on the human health
                    and mood, and all benefits are useful. As the answer to
                    all of that, you should listen to music daily, rather than
                    occasionally.{" "}
                  </p>
                  <a href="http://localhost:3000/products" className="btn btn-primary">
                    Products...
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://bit.ly/2TyYiXI"
                  width="80px"
                  height="200px"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Music for the heros</h5>
                  <p className="card-text">
                    Being creative is more than just possible and simple, but
                    it can be improved. For example, listening to the music
                    can help you see new things and get new ideas.
                  </p>
                  <a href="/contact" className="btn btn-primary">
                    Visit Us...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Card;