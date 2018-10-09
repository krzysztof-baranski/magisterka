import React, { Component } from 'react';
// import * as _ from 'lodash'
// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import withWebsocket from './websocket/websocket.service'
import MainMenuItem from './UI/MainMenuItem';
import DateContainer from './UI/DateContainer';

// const WSContext = React.createContext({});

class App extends Component {
    state = {
        firstRun: true,
        menuHidden: true
    };

    locationWatcher(location, action) {
        this.toggleMenu(location);
    }

    toggleMenu(location) {
        if (location && (location.pathname === '/' || location.pathname === '')) {
            this.setState({ menuHidden: false });
        } else {
            this.setState({ menuHidden: true });
        }
    }

    componentWillMount() {
        // console.log('@@@ App ', this.props);
        // Websocket.initWS();
    }

    componentDidMount() {
        this.props.history.listen(this.locationWatcher.bind(this));
        this.toggleMenu({ pathname: this.props.location.pathname })
        this.props.history.replace('/');
        this.setState({ firstRun: false }); // not neccessary
    }

    getBackPath = () => {
        const splittedPath = this.props.location.pathname.split('/');
        if (splittedPath.length <= 2) {
            return '/';
        } else {
            let path = splittedPath.length--;
            path = splittedPath.join('/');
            return path;
        }
    }

    render() {
        return (
            <div className={this.state.menuHidden ? 'menu-items-animated-up' : 'menu-items-animated-down'}>

                <nav className='nav-barr'>
                    <div className='menu-items' >
                        <Link to={{
                            pathname: this.getBackPath(),
                            WS: this.props.WS
                        }
                        } className='menu-item'>
                            <MainMenuItem img='close.png' label='BACK' />
                        </Link>
                        <Link to={{
                            pathname: '/tuner',
                            WS: this.props.WS
                        }} className='menu-item'>
                            <MainMenuItem img="radio.png" label="TUNER" />
                        </Link>
                        <Link to={{
                            pathname: '/media',
                            WS: this.props.WS
                        }} className='menu-item' >
                            <MainMenuItem img="media.png" label="MEDIA" />
                        </Link>
                        <Link to='/navigation' className='menu-item'>
                            <MainMenuItem img="navigation.png" label="NAVI" />
                        </Link>

                        <Link to='/settings' className='menu-item'>
                            <MainMenuItem img="settings.png" label="SETTINGS" />
                        </Link>
                        <hr />
                        <DateContainer />
                    </div>
                </nav>
                <br />
            </div>
        );
    }
}

export default withWebsocket(App);
