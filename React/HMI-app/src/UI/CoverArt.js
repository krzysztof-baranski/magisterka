import React from 'react';

const coverArt = (props) => {
    return (
        <div className="cover-art">
            <div className="cover-art-image">
                <img src={props.image} />
            </div>
        </div>
    )
}

export default coverArt;