import React from 'react';

const controls = (props) => {
    return (
        <div className="controls">
            <button name="prev" onClick={props.prev}></button>
            <button className="list-button" onClick={props.openList}>LIST</button>
            <button name="next" onClick={props.next} style= { {transform: 'rotateY(180deg)' } }></button>
        </div>
    )
}

export default controls;