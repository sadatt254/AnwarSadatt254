import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './partials/Layout';
import Routes from '../routes/Routes';

class App extends Component {
  render() {

    if(window.location.pathname === '/'){
      return(
        <div className="app">
          <Router>
              <Routes />              
          </Router>
        </div>
      )
    }else{
      return (
        <div className="app">
          <div className="am-container main-content">
            {/* <div className="am-diagonal"></div> */}
            <Layout >
              <Router>
                <Routes />              
              </Router>
            </Layout>
          </div>
        </div>
      );
    }
  }
}

export default App;
