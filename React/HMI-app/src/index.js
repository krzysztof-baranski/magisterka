import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import { Link } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Media from './media/Media';
import MediaList from './media/list/MediaList';
import Tuner from './tuner/Tuner';
import TunerList from './tuner/list/TunerList';
import Navigation from './navigation/Navigation';
import RecentDestinations from './navigation/recents/RecentDestinations';
import { Settings } from './settings/Settings';
import { AudioSettings } from './settings/audioSettings/AudioSettings';
import DisplaySettings from './settings/displaySettings/DisplaySettings';
import { OthersSettings } from './settings/othersSettings/OthersSettings';
import Websocket from './websocket/Websocket'

import reducer from './reducer/reducer';

const store = createStore(reducer);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<Provider store={store}>
		<div>
			<Websocket />
			<BrowserRouter>
				<div>
					<Route path='/' component={App} />
					<Route exact path='/media' component={Media} />
					<Route path='/media/list' component={MediaList} />
					<Route exact path='/tuner' component={Tuner} />
					<Route path='/tuner/list' component={TunerList} />
					<Route exact path='/navigation' component={Navigation} />
					<Route path='/navigation/recent-destinations' component={RecentDestinations} />
					<Route exact path='/settings' component={Settings} />
					<Route path='/settings/audio-settings' component={AudioSettings} />
					<Route path='/settings/display-settings' component={DisplaySettings} />
					<Route path='/settings/others-settings' component={OthersSettings} />
				</div>
			</BrowserRouter>
		</div>
	</Provider>
	,
	document.getElementById('root')
);
registerServiceWorker();
