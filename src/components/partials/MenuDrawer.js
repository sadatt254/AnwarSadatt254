import React from 'react';

class MenuDrawer extends React.Component{
	constructor(props){
		super(props);
		
		this._cancelClick = this._cancelClick.bind(this);
	}
	
	_cancelClick(e){
		const drawer = document.querySelector('.menu-drawer');
        drawer.classList.remove('open');
	}
	
	render(){
		return(
        <div className="menu-drawer">
            <div className="header">
                <a onClick={this._cancelClick} className="cancel">
                    <p className="am-bolder">x</p>
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/about">
                            <p className="am-bolder am-capitalize">About me</p>
                            <p className="menu-info">Note that the development build is not optimized.</p>                            
                        </a>
					</li>	
					<li>	
                        <a href="/portfolio">
                            <p className="am-bolder am-capitalize">protfolio</p>
                            <p className="menu-info">Note that the development build is not optimized.</p>                            
                        </a>
					</li>
					
					<li>	
                        <a href="/contacts">
                            <p className="am-bolder am-capitalize">contact me</p>
                            <p className="menu-info">Note that the development build is not optimized.</p>                            
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
	}
}

export default MenuDrawer;