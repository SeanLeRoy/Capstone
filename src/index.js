import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import LandingContainer from './components/LandingContainer.jsx';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(<LandingContainer />, document.getElementById('root'));

serviceWorker.unregister();
