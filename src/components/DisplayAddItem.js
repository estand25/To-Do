import React, { useState } from 'react'
import { AddItem } from '../components'

const DisplayAddItem = () => {
    const [isDisplay, setIsDisplay] = useState(false)

    const Display = () => {
        if(isDisplay){
            return (
                <AddItem />
            )
        } 
        else
        {
            return <></>
        }
    }

    const onClick = () => { 
        setIsDisplay(!isDisplay)
    }

    return (
        <div>
            <button
                className="btn btn-success"
                onClick={onClick}
            >
                Add To-do
            </button>  
            <Display />
        </div>  
    )
}

export default DisplayAddItem;