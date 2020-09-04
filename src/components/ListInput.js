import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

function ListInput() {

    const listContext = useContext(ListContext);

    const { addListItem } = listContext

    const handleChange = (value) => {
        addListItem(value)
    }

    return(
        <div>
            <textarea onChange={(event) => handleChange(event.target.value)}></textarea>
        </div>
    )
}

export default ListInput;