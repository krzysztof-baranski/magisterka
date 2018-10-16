import React from 'react';

import './Spinner.css';

const Spinner = (/* props */) => {
    return (<div style={{ display: 'flex', 'justifyContent': 'center', 'marginTop': '15%' }}>
        <div className="lds-dual-ring"></div>
    </div>);
}

export default Spinner;