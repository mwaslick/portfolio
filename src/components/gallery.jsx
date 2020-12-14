import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>My Projects</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://plantit-site.herokuapp.com/"
                      target='blank'
                      title="Plant-It"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Plant-It</h4>
                      </div>
                      <img
                        src="img/portfolio/plantit.png"
                        className="img-responsive"
                        alt="Plant-It"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://next-step-employment-app.herokuapp.com/"
                      target="blank"
                      title="Next Step"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Next Step</h4>
                      </div>
                      <img
                        src="img/portfolio/nextstep.png"
                        className="img-responsive"
                        alt="Next Step"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://mercspring.github.io/recipes-by-nutrition/"
                      target="blank"
                      title="Recipes by Nutrition"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Recipes by Nutrition</h4>
                      </div>
                      <img
                        src="img/portfolio/recipes.png"
                        className="img-responsive"
                        alt="Recipes by Nutrition"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://mw-employee-directory.herokuapp.com/"
                      target="blank"
                      title="Employee Directory"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Employee Directory</h4>
                      </div>
                      <img
                        src="img/portfolio/edhome.png"
                        className="img-responsive"
                        alt="Employee Directory"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://eat-da-burger-mw-app.herokuapp.com/"
                      target="blank"
                      title="Eat-Da-Burger"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Eat-Da-Burger</h4>
                      </div>
                      <img
                        src="img/portfolio/eatdaburger.png"
                        className="img-responsive"
                        alt="Eat-Da-Burger"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://mw-googlebooksearch.herokuapp.com/"
                      target="blank"
                      title="Google Books Search"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Google Books Search</h4>
                      </div>
                      <img
                        src="img/portfolio/googlebooks.png"
                        className="img-responsive"
                        alt="Google Books Search"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
