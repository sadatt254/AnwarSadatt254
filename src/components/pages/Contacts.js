import React, { Component } from 'react';

import PageIdentity from '../partials/PageId';

class Contacts extends Component {
    render() {
      return (
        <div className="contacts-component app-content">
          <div className="columns">
			<div className="column">
				<div className="info-left">
					<PageIdentity />
					<p>anwar magara</p>
				</div>
			</div>
			<div className="column">
				<div className="info-right">
					<div className="contact-info">
						<ul>
							<li>
								<a href="#"><span className="am-capitalize am-bolder main-color">facebook:</span> <span className="grey">facebook link here</span></a>
							</li>
							<li>
								<a href="#"><span className="am-capitalize am-bolder main-color">email:</span> <span className="grey">facebook link here</span></a>
							</li>
							<li>
								<a href="#"><span className="am-capitalize am-bolder main-color">linkedin:</span> <span className="grey">facebook link here</span></a>
							</li>
							<li>
								<a href="#"><span className="am-capitalize am-bolder main-color">instagram:</span> <span className="grey">facebook link here</span></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		  </div>
        </div>
      );
    }
  }
  
  export default Contacts;