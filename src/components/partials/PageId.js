import React from 'react';

export default class pageIdentity extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            pageTitle: 'about me'
        }
    }

    componentDidMount(){
        const title = document.querySelector('title');
        
        if(window.location.pathname === '/portfolio'){

            title.innerHTML = 'Anwar magara - my work';
            this.setState({pageTitle: 'my work'});

        }else if(window.location.pathname === '/contacts'){

            title.innerHTML = 'Anwar magara - contacts';            
            this.setState({pageTitle: 'contact me'})
            
        }else{

            title.innerHTML = 'Anwar magara - About me';            
            this.setState({pageTitle: 'about me'})
        }
    }
    render(){
        return(
            <div className="heading page-id">
                <h1 className="title am-bold main-color am-center">{this.state.pageTitle}</h1>
            </div>
        );
    }_
}