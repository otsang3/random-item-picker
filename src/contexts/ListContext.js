import React, { createContext, useState } from 'react';

export const ListContext = createContext();

function ListContextProvider(props) {

    const [state, setState] = useState({selectedItem: null, list: ""})

    const addListItem = (string) => {
        setState(prevState => {
            return {
                ...prevState,
                list: string
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
        const randomNum = Math.floor(Math.random() * state.list.length)
        const selectedItem = state.list[randomNum]
        setState(prevState => {
            return {
                ...prevState, selectedItem: selectedItem
            }
        })
    }

    return(
        <ListContext.Provider value={{
            state: state,
            addListItem: addListItem,
            deleteListItem: deleteListItem,
            randomiseListItem: randomiseListItem
        }}>
            {props.children}
        </ListContext.Provider>
    )

}

export default ListContextProvider;
