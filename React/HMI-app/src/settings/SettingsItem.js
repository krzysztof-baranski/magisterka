import React from 'react';

const settingsItem = (props) => {
    return (
        <div>
            <h3>{props.label}</h3>
            <button onClick={props.onClickedDown}>-</button>
            <progress value={props.value} max="100" onClick={props.onClickedProgress}></progress>
            <button onClick={props.onClickedUp}>+</button>
        </div>
    )
}

export default settingsItem;