import React from 'react';
import MenuToggle from './MenuToggle';

const Header = () => {
    return(
        <header id="header">
			<div className="menu-split">
				<div className="split-left">
					<div className="company-title">
                        <p className="am-center am-capitalize am-bold"><span className="main-color">code univarse</span> 254</p>
                    </div>
				</div>
				<div className="split-right">
					<MenuToggle menuTitle="menu"/>
				</div>
			</div>
        </header>
    );
}

export default Header;		    