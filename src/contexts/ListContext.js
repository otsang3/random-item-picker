import React, { createContext } from 'react';

export const ListContext = createContext();

function ListContextProvider(props) {

    return(
        <ListContext.Provider>
            {props.children}
        </ListContext.Provider>
    )

}

export default ListContextProvider;
