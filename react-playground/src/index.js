import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './DragTest1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.unmountComponentAtNode(document.getElementById('root'));
registerServiceWorker();
