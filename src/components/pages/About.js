import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-component app-content">
        <div className="columns">
          <div className="column">
            <avatar />
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default About;
