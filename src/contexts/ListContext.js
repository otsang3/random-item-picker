import React, { createContext, useState } from 'react';

export const ListContext = createContext();

function ListContextProvider(props) {

    const [state, setState] = useState({selectedItem: null, list: []})

    const addListItem = (listItem) => {
        setState(prevState => {
            return {
                ...prevState,
                list: [...prevState.list, listItem]
            }
        })
    }

    const deleteListItem = (index) => {
        setState(prevState => {
            prevState.list.splice(index, 1);
            return [...prevState]
        })
    }

    const randomiseListItem = () => {

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
