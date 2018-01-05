import React from 'react';
import {
    Route, 
    Switch} from 'react-router-dom';

// Component Imports

import LandingPage from '../components/pages/LandingPage';
import About from '../components/pages/About';
import Work from '../components/pages/Work';
import Contacts from '../components/pages/Contacts';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/About" exact component={About}/>
            <Route path="/portfolio" component={Work}/>
            <Route path="/Contacts" component={Contacts}/>
        </Switch>
    )
}

export default Routes;