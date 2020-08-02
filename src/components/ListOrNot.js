import React from 'react'
import { SwitchBetween } from '../components'

const ListOrNot = ({items}) => {
    var list = items.itemList.filter( x => x != null);

    if(list.length == 0){
        return (
            <div className="listItemBorder">
                No items to Display
            </div>
        )
    }
    else 
    {
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