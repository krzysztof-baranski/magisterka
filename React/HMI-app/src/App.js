import React, { Component } from 'react';
// import * as _ from 'lodash'
// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Websocket } from './websocket/websocket.service';
import { MediaService } from './media//media.service';

// const WSContext = React.createContext({});

class App extends Component {
    constructor(props) {
        super(props);
        Websocket.initWS();
        this.ws = Websocket.getWS();
        this.mediaService = new MediaService();

        this.props.location.mediaService = this.mediaService;
        
        this.props.history.listen(this.locationWatcher.bind(this));
        this.menuHidden = false;
        console.warn('!@!@##', this.ws);
        this.media = { 
            pathname: '/media', 
            props: {
                mediaservice: this.mediaService
            }
        };
    }

    locationWatcher (location, action) {
        this.toggleMenu(location);
    }

    toggleMenu (location) {
        if (location && (location.pathname === '/' || location.pathname === '')) {
            this.menuHidden = false;
        } else {
            this.menuHidden = true;
        }
    }
    
    render() {
        return (
            <div className={ this.menuHidden ? 'menu-items-animated-up' : 'menu-items-animated-down' }>
                <nav className='nav-barr'>
                    <div className='menu-items' >
                        <Link to='/' className='menu-item'>
                            <h2>
                                <img src={require('./assets/general/close.png')} alt=''/>
                                <span>BACK</span>
                            </h2>
                        </Link>
                        <Link to='/tuner' ws={{ws: this.ws}} className='menu-item'>
                            <h2>
                                <img src={require('./assets/general/radio.png')} alt=''/>
                                <span>TUNER</span>
                            </h2>
                        </Link>

                        <Link to='/media' className='menu-item' >
                            <h2>
                                <img src={require('./assets/general/media.png')} alt=''/>
                                <span>MEDIA</span>
                            </h2>
                        </Link>

                        <Link to='/navigation' className='menu-item'>
                            <h2>
                                <img src={require('./assets/general/navigation.png')} alt=''/>
                                <span>NAVI</span>
                            </h2>
                        </Link>

                        <Link to='/settings' className='menu-item'>
                            <h2>
                                <img src={require('./assets/general/settings.png')} alt=''/>
                                <span>SETTINGS</span>
                            </h2>
                        </Link>
                        <hr />
                    </div>
                    <div className='date-container'>
                        <h2>
                          <div className='date'>13:59</div>
                      </h2>
                    </div>
                </nav>
                <br />
            </div>
        );
    }
}

export default withRouter(App);
