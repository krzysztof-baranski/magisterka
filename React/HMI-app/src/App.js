import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div>
            <nav className='nav-barr'>
                <div className='menu-items' >
                    <Link to='/' className='menu-item'>
                        <h2>
                            <img src={require('./assets/general/close.png')} />
                            <span>BACK</span>
                        </h2>
                    </Link>
                    <Link to='/tuner' className='menu-item'>
                        <h2>
                            <img src={require('./assets/general/radio.png')} />
                            <span>TUNER</span>
                        </h2>
                    </Link>

                    <Link to='/media' className='menu-item'>
                        <h2>
                            <img src={require('./assets/general/media.png')} />
                            <span>MEDIA</span>
                        </h2>
                    </Link>

                    <Link to='/navigation' className='menu-item'>
                        <h2>
                            <img src={require('./assets/general/navigation.png')} />
                            <span>NAVI</span>
                        </h2>
                    </Link>

                    <Link to='/settings' className='menu-item'>
                        <h2>
                            <img src={require('./assets/general/settings.png')} />
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

export default App;
