import React from 'react'
import { SwitchBetween } from '../components'

const ListOrNot = ({items}) => {
    var list = items.itemList.filter( x => x != null);

    if(list.length == 0){
        return (
            <div className="listItemBorder">
                Not items To-do
            </div>
        )
    }
    else 
    {
        console.log('list', list)

        return (
            <div>
                {list
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