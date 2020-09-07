import React, { useContext, useState } from 'react';
import { ListContext } from '../contexts/ListContext';

function ListRandomiser() {

    const [loadToggle, setToggle] = useState(true);

    const listContext = useContext(ListContext);

    const { randomiseListItem, state } = listContext;

    const renderResult = () => {
        if (loadToggle) {
            setTimeout(() => toggleLoad(), 2000)
            return displayLoading();
        } else {
            return displayResult();
        }
       
    }

    const displayResult = () => {
        return(
            <p style={{textAlign: "center"}}>Result is {state.selectedItem}!</p>
        )
    }

    const displayLoading = () => {
        return(
            <div>
                <p style={{textAlign: "center"}}>*Drum roll*</p>
            </div>
        )
    }

    const toggleLoad = () => {
        setToggle(prevState => !prevState)
    }

    return(
        <div className="col-1">
            <button onClick={() => randomiseListItem()}>Randomise</button>
            {state.selectedItem && renderResult()}
        </div>
    )
}

export default ListRandomiser;