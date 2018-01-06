import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page-component">
		<div className="overlay"></div>	
		<div className="landing-avatar">
			<div className="landing-content">
				<div className="heading">
					<h1 className="title am-bolder am-norm am-center main-color">.anwar</h1>
					<p className="white am-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempora dolorum corporis architecto culpa perspiciatis sapiente a reprehenderit voluptatem. Ut voluptatem ipsa possimus natus libero consectetur ea debitis quasi eveniet.</p>
					<div className="btn-holder">
						<a href="/about" className="btn btn-left white am-bolder am-capitalize">get to know me</a>
						<a href="/portfolio" className="btn btn-right am-bolder am-capitalize">view my work</a>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}
  
 export default LandingPage;