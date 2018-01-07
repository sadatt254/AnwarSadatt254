import React, { Component } from 'react';

import PageIdentity from '../partials/PageId';

class Work extends Component {
    render() {
      return (
        <div className="work-component app-content">
			<div className="columns">
				<div className="column">
					<PageIdentity />
					<p>this is the Work page</p>
				</div>
				<div className="column">
					magara
				</div>
			</div>
        </div>
      );
    }
  }
  
  export default Work;