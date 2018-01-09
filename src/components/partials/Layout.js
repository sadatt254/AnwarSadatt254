import React from 'react';


import Header from './Header';
import Footer from './Footer';
import MenuDrawer from './MenuDrawer';

export default class DefaultLayout extends React.Component{
	componentDidMount(){
		const contentDiv = document.querySelector('.app-content');
		const header = document.querySelector('#header')
		
		let headerHeight = header.clientHeight;
		
		contentDiv.height = 
			window.innerHeight - (headerHeight-header.clientTop);
		console.log({contentDiv});
	}
    render(){
        return(
            <div className="wrapper">
                <MenuDrawer />
                <Header />
				<section>
                   {this.props.children} 
				</section>
                <Footer />
            </div>
        )
    }
}