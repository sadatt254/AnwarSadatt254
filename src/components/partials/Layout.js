import React from 'react';


import Header from './Header';
import Footer from './Footer';
import PageIdentity from './PageId';
import MenuDrawer from './MenuDrawer';

export default class DefaultLayout extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <MenuDrawer />
                <Header />
                    <PageIdentity />
                   {this.props.children} 
                <Footer />
            </div>
        )
    }
}