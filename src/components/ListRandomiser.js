import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

function ListRandomiser() {

    const listContext = useContext(ListContext);

    const { randomiseListItem, state } = listContext;

    return(
        <div className="col-1">
            <button onClick={() => randomiseListItem()}>Randomise</button>
            {state.selectedItem && <p>Result: {state.selectedItem}</p>}
        </div>
    )
}

export default ListRandomiser;