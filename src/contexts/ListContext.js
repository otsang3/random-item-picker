import React, { createContext, useState } from 'react';

export const ListContext = createContext();

function ListContextProvider(props) {

    const [state, setState] = useState([])

    const addListItem = (listItem) => {
        setState(prevState => [
            ...prevState, listItem
        ])
    }

    const deleteListItem = (index) => {
        setState(prevState => {
            prevState.splice(index, 1);
            return [...prevState]
        })
    }

    return(
        <ListContext.Provider value={{
            state: state,
            addListItem: addListItem,
            deleteListItem: deleteListItem
        }}>
            {props.children}
        </ListContext.Provider>
    )

}

export default ListContextProvider;
