import React from 'react';

import './SourceSelector.css';

const sourceSelector = (props) => {
    console.log('SELECTOR', props);
    let selector = (
        <div className='source-selector'>
            <div onClick={(e) => props.selectSource(e, 'hdd')}
                className={'source-item' + (props.currentSource && props.currentSource.mediaID === 'hdd' ? ' active' : '')}>
                <img className='source-icon' src={require('../assets/media/hdd.png')} alt='' />
                <span className='source-label'>HDD</span>
            </div>
            <div onClick={(e) => props.selectSource(e, 'usb')}
                className={'source-item' + (props.currentSource && props.currentSource.mediaID === 'usb' ? ' active' : '')}>
                <img className='source-icon' src={require('../assets/media/usb.png')} alt='' />
                <span className='source-label'>USB</span>
            </div>
            <div onClick={(e) => props.selectSource(e, 'bt')}
                className={'source-item' + (props.currentSource && props.currentSource.mediaID === 'bt' ? ' active' : '')}>
                <img className='source-icon' src={require('../assets/media/bt.png')} alt='' />
                <span className='source-label'>BT</span>
            </div>
            <hr />
        </div>
    );
    if (props.match.path === '/tuner') {
        console.log('selector tuner', props, props.currentStation.band === 'fm' ? 'active' : 'aa');
        selector = (
            <div className='source-selector'>
                <div className={'source-item' + (props.currentStation.band === 'fm' ? ' active' : '')}
                    onClick={(e) => props.activateBand(e, 'fm')}>
                    <img className='source-icon' src={require('../assets/tuner/antena.png')} alt='' />
                    <span className='source-label'>FM</span>
                </div>
                <div className={'source-item' + (props.currentStation.band === 'am' ? ' active' : '')}
                    onClick={(e) => props.activateBand(e, 'am')}>
                    <img className='source-icon' src={require('../assets/tuner/antena.png')} alt='' />
                    <span className='source-label'>AM</span>
                </div>
                <hr />
            </div>

        )
    }
    return (<div>{selector}</div>);
}

export default sourceSelector;