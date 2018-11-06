import React, { Component } from 'react';

class dateContainer extends Component {
    getMinutes = (date) => {
        let mins = date.getMinutes();
        if (mins < 10) {
            mins = '0' + mins;
        }


        return mins;
    }

    render() {
        const date = new Date();
        return (
            <div className='date-container'>
                <h2>
                    <div className='date'>{(date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</div>
                    <div className='date'>{date.getHours() + ':' + this.getMinutes(date)}</div>
                </h2>
            </div>
        )
    }
}

export default dateContainer;