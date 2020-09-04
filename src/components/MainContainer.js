import React from 'react';
import ListInput from './ListInput';
import ListRandomiser from './ListRandomiser';

function MainContainer() {

    return(
        <div className="main-container">
            <ListInput/>
            <ListRandomiser/>
        </div>
    )
}

export default MainContainer;