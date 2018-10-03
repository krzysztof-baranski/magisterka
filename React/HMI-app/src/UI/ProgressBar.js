import React from 'react';

const progressBar = (props) => {
    return (
        <div>
            <div>
                <progress value={props.value} max={props.max}></progress>
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