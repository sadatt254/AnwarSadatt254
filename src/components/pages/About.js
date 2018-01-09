import React, { Component } from 'react';

//import Button from '../partials/Button';
import PageIdentity from '../partials/PageId';

class About extends Component {
  render() {
    return (
      <div className="about-component app-content">
		<div className="columns">
			<div className="column is-narrow">
				<PageIdentity />
			</div>
			<div className="column is-three-quarters">
				<div className=""></div>
			</div>
		</div>
      </div>
    );
  }
}

export default About;
