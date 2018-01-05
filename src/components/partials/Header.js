import React from 'react';
import MenuToggle from './MenuToggle';

const Header = () => {
    return(
        <header id="header">
            <div className="columns">
                <div className="column is-three-quarters">
                    <div className="company-title">
                        <p className="am-center am-capitalize am-bold"><span className="main-color">code univarse</span> 254</p>
                    </div>
                </div>
                <div className="column">
                    <MenuToggle menuTitle="menu"/>
                </div>                
            </div>
        </header>
    );
}

export default Header;