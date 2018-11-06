import React from 'react';
import './Title.css';

const title = (props) => {
    return (
        <div className="track-title">
            <span className="fav-ico-container">
                { props.isFavorite && <img className="fav-ico" src={require('../assets/media/favorite_icon.png')} alt='' /> }
            </span>
            <span>
                { props.name }
            </span>
        </div>
    )
} 

export default title;