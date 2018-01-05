import React from 'react';

const MenuDrawer = () => {
    return(
        <div className="menu-drawer">
            <div className="header">
                <a className="cancel">
                    <p className="am-bolder">x</p>
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/about">
                            <p>About me</p>
                            <p className="menu-info">Note that the development build is not optimized.</p>                            
                        </a>

                        <a href="/portfolio">
                            <p>protfolio</p>
                            <p className="menu-info">Note that the development build is not optimized.</p>                            
                        </a>

                        <a href="/contacts">
                            <p>contact me</p>
                            <p className="menu-info">Note that the development build is not optimized.</p>                            
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuDrawer;