import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import { Link } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import asyncComponent from './hoc/AsyncComponent';

// import Media from './media/Media';
import MediaList from './media/list/MediaList';
// import Tuner from './tuner/Tuner';
import TunerList from './tuner/list/TunerList';
// import Navigation from './navigation/Navigation';
import RecentDestinations from './navigation/recents/RecentDestinations';
// import Settings from './settings/Settings';
import Websocket from './websocket/Websocket'

import reducer from './reducer/reducer';

const store = createStore(reducer);
const asyncMedia = asyncComponent(() => { return import('./media/Media')});
const asyncTuner = asyncComponent(() => { return import('./tuner/Tuner')});
const asyncNavigation = asyncComponent(() => { return import('./navigation/Navigation')});
const asyncSettings = asyncComponent(() => { return import('./settings/Settings')});

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<Provider store={store}>
		<div>
			<Websocket />
			<BrowserRouter>
				<div>
					<Route path='/' component={App} />
					<Route exact path='/media' component={asyncMedia} />
					<Route path='/media/list' component={MediaList} />
					<Route exact path='/tuner' component={asyncTuner} />
					<Route path='/tuner/list' component={TunerList} />
					<Route exact path='/navigation' component={asyncNavigation} />
					<Route path='/navigation/recent-destinations' component={RecentDestinations} />
					<Route exact path='/settings' component={asyncSettings} />
				</div>
			</BrowserRouter>
		</div>
	</Provider>
	,
	document.getElementById('root')
);
registerServiceWorker();
