import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { item } from '../action';
import { ItemObj } from '../model';
import { AddEditItem } from '../components'

const AddItem = () => {
    const items = useSelector(state => state.item)
    const dispatch = useDispatch()

    const [iName, setiName] = useState("")
    const [iDesc, setiDesc] = useState("")
    const [iDueDate, setiDueDate] = useState(new Date())

    const onSubmitClick = () => {
        var _item = new ItemObj(
            items.itemList.length +1,
            iName,
            iDesc,
            new Date(iDueDate).toDateString(),
            false);

        dispatch(item.setItemAdd(_item))
    }

    return (
        <div className="listItemBorder">
            <AddEditItem
                iName={iName}
                setiName={setiName}
                iDesc={iDesc}
                setiDesc={setiDesc}
                iDueDate={iDueDate}
                setiDueDate={setiDueDate}
                onClick={onSubmitClick}
                submitTitle={"Add"}
            />
        </div>
    )
}

export default AddItem;