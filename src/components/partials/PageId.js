import React from 'react';

export default class pageIdentity extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            pageTitle: 'about',
			subTitle: 'me'
        }
    }

    componentDidMount(){
        const title = document.querySelector('title');
        
        if(window.location.pathname === '/portfolio'){

            title.innerHTML = 'Anwar magara - my work';
            this.setState({
				pageTitle: 'my',
				subTitle: 'work'
			});

        }else if(window.location.pathname === '/contacts'){

            title.innerHTML = 'Anwar magara - contacts';            
            this.setState({
				pageTitle: 'contact',
				subTitle: 'me'
			})
            
        }
    }
    render(){
        return(
            <div className="heading page-id">
                <h1 className="title am-bolder main-color am-center">{this.state.pageTitle} <span className="grey">{this.state.subTitle}</span></h1>
            </div>
        );
    }_
}