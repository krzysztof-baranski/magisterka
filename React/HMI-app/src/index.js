import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom'
// import { Link } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Media } from './media/media.component';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<BrowserRouter>
		<div>
    		<Route exact path='/' component={App} />
  			<Route path='/media' component={Media} />
		</div>
	</BrowserRouter>
	,
	document.getElementById('root')
);
registerServiceWorker();
