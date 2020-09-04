import React, { useContext, useState } from 'react';
import { ListContext } from '../contexts/ListContext';

function ListInput() {

    const [value, setValue] = useState("")

    const listContext = useContext(ListContext);

    const { addListItem, randomiseListItem } = listContext

    const handleChange = (value) => {
        setValue(value)
    }

    const handleClick = () => {
        addListItem(value)
        setValue("")
    }

    return(
        <div>
            <input 
            onChange={(event) => handleChange(event.target.value)} 
            placeholder="e.g. Titanic"
            value={value}
            />
            <button onClick={() => handleClick()}>Add Item</button>
            <button onClick={() => randomiseListItem()}></button>
        </div>
    )
}

export default ListInput;