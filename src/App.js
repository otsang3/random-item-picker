import React from 'react';
import MainContainer from './components/MainContainer';
import ListContextProvider from './contexts/ListContext';

function App() {

    return(
        <div>
            <ListContextProvider>
                <MainContainer/>
            </ListContextProvider>
            
        </div>
    )
}

export default App;