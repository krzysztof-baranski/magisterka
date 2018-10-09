import React from 'react';

const progressBar = (props) => {
    return (
        <div>
            <div>
                <meter value={props.value} max={props.max} min={props.min ? props.min : 0}></meter>
            </div>
            <div className="track-info">
                <span className="current-time">{props.currentTime ? props.currentTime : null}</span>
                <span className="track-number">{props.progressLabel ? props.progressLabel : null}</span>
                <span className="total-time">{props.totalTime ? props.totalTime : null}</span>
            </div>
        </div>
    )
}

export default progressBar;