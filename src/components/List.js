import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import ListItem from './ListItem';

function List(props) {

    const listContext = useContext(ListContext)

    const { state } = listContext;

    const renderList = () => {
        return(          
            <ul>
                {state.map(item => <ListItem item={item}/>)}
            </ul>        
        )
    }

    return(
        <div>
            {state.length > 0 && renderList()}
        </div>
    )
  
}

export default List;