import React from 'react';

import '../UI/NaviOptionSelector.css';

const naviOptionSelector = (props) => {
    return (
        <div>
            <div className='navi-source-selector'>
                <div onClick={() => props.selectOption('home-address')}
                    className="navi-source-item active">
                    <img src={require('../assets/navigation/home.png')} alt='' />
                    <div>Set HOME address</div>
                </div>
                <div onClick={() => props.selectOption('enter-address')}
                    className="navi-source-item active">
                    <img src={require('../assets/navigation/destination.png')} alt='' />
                    <div>Enter address</div>
                </div>
                <div onClick={() => props.selectOption('recent-dest')}
                    className="navi-source-item active">
                    <img src={require('../assets/navigation/recents.png')} alt='' />
                    <div>Recent destinations</div>
                </div>
                
                <hr />
            </div>
        </div>
    );
}

export default naviOptionSelector;