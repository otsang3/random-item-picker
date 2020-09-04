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

    const clearSelected = () => {
        setState(prevState => {
            return {...prevState, list: ""}
        })
    }

    const randomiseListItem = () => {
        const stringArr = state.list.split("\n")
        const randomNum = Math.floor(Math.random() * stringArr.length)
        setState(prevState => {
            return {
                ...prevState,
                selectedItem: stringArr[randomNum]
            }
        })
    }

    return(
        <ListContext.Provider value={{
            state: state,
            addListItem: addListItem,
            clearSelected: clearSelected,
            randomiseListItem: randomiseListItem
        }}>
            {props.children}
        </ListContext.Provider>
    )

}

export default ListContextProvider;
