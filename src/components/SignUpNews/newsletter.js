import React from "react";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="NewsLetter">
        <div className="NewsLetter-form">
          <div className="newsletter-img">
            <img
              src="/img/mailing-list-img.png"
              style={{ visibility: false }}
            />
          </div>
          <div className="NewsLetter-Field">
            <p>Sign up for our newsletter and get 10% off your next order.</p>
            <div className="Searchbar">
              <input
                type="search"
                className="search"
                placeholder="Your Email"
              />
              <img src="/img/arrow.svg" className="arrow" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsletter;
