import React from 'react';

import ListElement from './ListElement';

class listElements extends React.Component {
    render() {
        // this.props = {...this.props}
        let newItems = this.props.items.map((el) => {
            el.id = el.trackID || el.stationID || 0;
            
            return <ListElement key={el.id} clicked={this.props.clicked} item={el} />
        });

        return (
            <ul>
                {newItems}        
            </ul>
        );
    }
}

export default listElements;