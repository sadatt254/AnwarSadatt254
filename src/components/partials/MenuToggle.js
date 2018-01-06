import React from 'react';
// import { Link } from 'react-router-dom';

export default class MenuToggle extends React.Component{
    constructor (props){
        super(props);

        this._hundleClick = this._hundleClick.bind(this);
    }

    _hundleClick(e){
        e.preventDefault();

        const drawer = document.querySelector('.menu-drawer');
        drawer.classList.add('open');
    }

    componentDidMount(){
        const toggleContainer = document.querySelector('.am-menu-toggle');
        const menuItem = document.querySelectorAll('.am-menu-item');

        toggleContainer.addEventListener('mouseover', () =>{
            // console.log({menuItem});
            menuItem[0].style.width = 60 + '%';
            menuItem[1].style.width = 80 + '%';
            menuItem[2].style.width = 60 + '%';
        })

        toggleContainer.addEventListener('mouseout', () =>{
            // console.log({menuItem});

            menuItem[0].style.width = 100 + '%';
            menuItem[1].style.width = 100 + '%';
            menuItem[2].style.width = 100 + '%';
        })
    }
    render(){
        return(
            <div className="menu-toggle">
                <a href="">
                    <div onClick = {this._hundleClick} className="am-menu-toggle">
                        <div className="am-menu-item"></div>
                        <div className="am-menu-item"></div>
                        <div className="am-menu-item"></div>  
						<div className = "heading">
							<p className="am-center">{this.props.menuTitle}</p>
						</div>                      
                    </div>
                </a>
            </div>
        );
    }
}