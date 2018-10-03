import React from 'react';

import MediaListElement from './MediaListElement';

class mediaListElements extends React.Component {
    render() {
        // this.props = {...this.props}
        let newItems = this.props.items.map((el) => {
            el.id = el.trackID || el.stationID;
            return <MediaListElement clicked={this.props.clicked} key={el.id} item={el} />
        });

        return (
            <ul>
                {newItems}        
            </ul>
        );
    }
}

export default mediaListElements;