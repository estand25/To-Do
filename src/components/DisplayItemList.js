import React from 'react'
import { useSelector } from 'react-redux'
import { ListOrNot } from '../components'

const DisplayItemList = () => {
    const items = useSelector(state => state.item)

    return (
        <ListOrNot 
            items={items}
        />
    )

}


export default DisplayItemList