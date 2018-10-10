import React from 'react';

import './SourceSelector.css';

const sourceSelector = (props) => {
    console.log('SELECTOR', props);
    return (
        <div className='source-selector'>
            <div onClick={(e) => props.selectSource(e, 'hdd')}
                className={'source-item' + (props.currentSource && props.currentSource.mediaID === 'hdd' ? ' active' : '')}>
                <img className='source-icon' src={require('../assets/media/hdd.png')} alt='' />
                <span className='source-label'>HDD</span>
            </div>
            <div onClick={(e) => props.selectSource(e, 'hdd')}
                className={'source-item' + (props.currentSource && props.currentSource.mediaID === 'usb' ? ' active' : '')}>
                <img className='source-icon' src={require('../assets/media/usb.png')} alt='' />
                <span className='source-label'>USB</span>
            </div>
            <div onClick={(e) => props.selectSource(e, 'hdd')}
                className={'source-item' + (props.currentSource && props.currentSource.mediaID === 'bt' ? ' active' : '')}>
                <img className='source-icon' src={require('../assets/media/bt.png')} alt='' />
                <span className='source-label'>BT</span>
            </div>
            <hr />
        </div>
    )
}

export default sourceSelector;