import React from 'react';

const mainMenuItem = (props) => {
    return (
        <h2>
            <img src={require('../assets/general/' + props.img)} alt=''/>
            <span>{props.label}</span>
        </h2>
    )
}

export default mainMenuItem;