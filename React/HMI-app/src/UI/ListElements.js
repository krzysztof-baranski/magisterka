import React from 'react';

import ListElement from './ListElement';

class listElements extends React.Component {
    render() {
        // this.props = {...this.props}
        let newItems = this.props.items.map((el) => {
            el.id = el.trackID || el.stationID;
            return <ListElement clicked={this.props.clicked} key={el.id} item={el} />
        });

        return (
            <ul>
                {newItems}        
            </ul>
        );
    }
}

export default listElements;