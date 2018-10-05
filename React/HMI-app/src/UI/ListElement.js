import React from 'react';

const listElement = (props) => {
    return (
        <li key={props.item.id} className="list-item" onClick={(e) => props.clicked(e, props.item.id)}>
            <span className="fav-ico-container">
                {props.item.isFavorite ? <img className="fav-ico" src={require('../assets/media/favorite_icon.png')} alt='' /> : null}
            </span>
            <span>{props.item.name}</span>
        </li>
    );
}

export default listElement;