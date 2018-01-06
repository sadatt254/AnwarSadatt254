import React from 'react';


import Header from './Header';
import Footer from './Footer';
import MenuDrawer from './MenuDrawer';

export default class DefaultLayout extends React.Component{
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