import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

function ListRandomiser() {

    const listContext = useContext(ListContext);

    const { randomiseListItem } = listContext;

    return(
        <div>
            <button onClick={() => randomiseListItem()}>Randomise List!</button>
        </div>
    )
}

export default ListRandomiser;