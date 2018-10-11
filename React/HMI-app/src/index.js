import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import { Link } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Media from './media/media.component';
import MediaList from './media/list/media.list.component';
import Tuner from './tuner/tuner.component';
import TunerList from './tuner/list/tuner.list.component';
import { Navigation } from './navigation/navigation.component';
import { Settings } from './settings/settings.component';
import { AudioSettings } from './settings/audio-settings/audio-settings.component';
import { DisplaySettings } from './settings/display-settings/display-settings.component';
import { OthersSettings } from './settings/others-settings/others-settings.component';
import Websocket from './websocket/websocket.service'

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
					<Route path='/navigation' component={Navigation} />
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
