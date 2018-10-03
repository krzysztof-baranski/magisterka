import React, { Component } from 'react';

class dateContainer extends Component {
    render () {
        const date = new Date();
        return (
            <div className='date-container'>
                <h2>
                    <div className='date'>{ date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() }</div>
                    <div className='date'>{ date.getHours() + ':' + date.getMinutes()}</div>
                </h2>
            </div>
        )
    }
} 

export default dateContainer;