import React from 'react';

const controls = (props) => {
    return (
        <div className="controls">
            <button name="prev" onClick={props.prevTrack}></button>
            <button className="list-button" onClick={props.openList}>LIST</button>
            <button name="next" onClick={props.nextTrack} style= { {transform: 'rotateY(180deg)' } }></button>
        </div>
    )
}

export default controls;