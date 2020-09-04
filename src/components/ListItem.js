import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

function ListItem(props) {

    const listContext = useContext(ListContext);

    const { deleteListItem } = listContext;

    return(
        <li>
            {props.item}
            <button onClick={() => deleteListItem(props.index)}>Delete</button>
        </li>
    )
}

export default ListItem;