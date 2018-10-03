import React from 'react';

const mediaListElement = (props) => {
    return (
        <li key={props.item.id} className="list-item" onClick={(e) => props.clicked(e, props.item.id)}>
            <span className="fav-ico-container">
                <img className="fav-ico" src={require('../../assets/media/favorite_icon.png')} alt='' />
            </span>
            <span>{props.item.name}</span>
        </li>
    );
}

export default mediaListElement;