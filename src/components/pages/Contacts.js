import React, { Component } from 'react';

import PageIdentity from '../partials/PageId';

class Contacts extends Component {
    render() {
      return (
        <div className="contacts-component app-content">
          <div className="columns contacts-wrapper">
			<div className="column is-narrow">
				<div className="info-left">
					<PageIdentity />
				</div>
			</div>
			<div className="column">
				<div className="info-right">
					<div className="contact-info">
						<ul>
							<li>
								<a href="www.facebook.com/anwar-magara"><span className="am-capitalize am-bolder main-color">facebook:</span> <span className="grey">check me out on facebookb</span></a>
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
				<div className="columns">
					<div className="column">
						<div className="am-m-info">
							<div className="heading">
								<h1 className="title main-color am-bolder am-center">Adreess</h1>
								<p className="subtitle am-center am-small adress-info">kibra ideas,Laini Saba, Nairobi, kenya</p>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="am-m-info">
							<div className="heading">
								<h1 className="title main-color am-bolder am-center">Adreess</h1>
								<p className="subtitle am-center am-small adress-info">kibra ideas,Laini Saba, Nairobi, kenya</p>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="am-m-info">
							<div className="heading">
								<h1 className="title main-color am-bolder am-center">Adreess</h1>
								<p className="subtitle am-center am-small adress-info">kibra ideas,Laini Saba, Nairobi, kenya</p>
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
  
  export default Contacts;