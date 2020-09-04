import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

function ListInput() {

    const listContext = useContext(ListContext);

    const { addListItem } = listContext

    const handleChange = (value) => {
        addListItem(value)
    }

    return(
        <div className="col-1">
            <h3 style={{opacity: 0.8}}>Enter a list of items separated by a new line and click on the Randomise button!</h3>
            <textarea onChange={(event) => handleChange(event.target.value)}></textarea>
        </div>
    )
}

export default ListInput;