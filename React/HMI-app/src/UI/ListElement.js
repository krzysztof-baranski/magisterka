import React from 'react';

const listElement = (props) => {
    return (
        <li className="list-item" onClick={(e) => props.clicked(e, props.item.id)}>
            <span className="fav-ico-container">
                {props.item.isFavorite ? <img className="fav-ico" src={require('../assets/media/favorite_icon.png')} alt='' /> : null}
            </span>
            <span style={{ width: '90%' }}>{props.item.name || props.item.title || (props.item.country + ', ' + props.item.city + ', ' + props.item.street)}</span>
        </li>
    );
}

export default listElement;