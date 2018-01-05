import React from 'react';
import ReactDOM from 'react-dom';

// Component imports

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Css / Styles imports

import './styles/bulma.css';
import './styles/master.css';
import './styles/app.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
