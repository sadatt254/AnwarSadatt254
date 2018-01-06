import React from 'react';

const Button = (props) =>{
	return(
		<div className="Button">
			<a className="btn" href={props.path}>{props.urlName}</a>
		</div>
	)
}

export default Button;