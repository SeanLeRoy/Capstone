import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));

serviceWorker.unregister();
