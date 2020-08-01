import React from 'react'
import { SwitchBetween } from '../components'

const ListOrNot = ({items}) => {
    if(items.itemList.length == 0){
        return (
            <div className="listItemBorder">
                Not items To-do
            </div>
        )
    }
    else 
    {
        console.log('list', items.itemList)

        return (
            <div>
                {items.itemList
                    .map(it => (
                        <SwitchBetween
                            key={it.id}
                            item_={it}
                        />
                    ))
                }
            </div>
        )
    } 
}

export default ListOrNot