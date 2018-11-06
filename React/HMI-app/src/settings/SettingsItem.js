import React from 'react';
import './SettingsItem.css';

const settingsItem = (props) => {
    return (
        <div>
            <h3>{props.label}</h3>
            <div className="settings-controls">
                <button onClick={props.onClickedDown}>-</button>
                <meter value={props.value} max="100" onClick={props.onClickedProgress}></meter>
                <button onClick={props.onClickedUp}>+</button>
            </div>
            <hr />
        </div>
    )
}

export default settingsItem;