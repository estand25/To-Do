import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { item } from '../action';
import { ItemObj } from '../model';
import { AddEditItem ,ReadOnlyItem, ButtonGenerator } from '../components'

const SwitchBetween = ({item_}) => {
    const dispatch = useDispatch()

    const [iName, setiName] = useState(item_.name)
    const [iDesc, setiDesc] = useState(item_.description)
    const [iDueDate, setiDueDate] = useState(new Date(item_.dueDate))
    const [isComplete, setIsComplete] = useState(item_.isCompleted)
    const [isEdit, setIsEdit] = useState(false)

    const onEdit = () => {
        setIsEdit(!isEdit);
    }

    var cItem = () => {
        return new ItemObj(
            item_.id,
            iName,
            iDesc,
            new Date(iDueDate).toDateString(),
            isComplete
        )
    }

    const onEditSubmissionClick = () => {
        dispatch(item.setItemUpdate(cItem()))
    }

    const onDeleClick = () => {
        dispatch(item.setItemDelete(cItem()))
    }

    const editBtn = [
        {
            className:'btn btn-outline-success',
            onClick: () => onEdit(),
            text: 'Edit'
        },
        {
            className:'btn btn-outline-danger',
            onClick:  () => onDeleClick(),
            text: 'Remove'
        }
    ]

    const SwitchComp = () =>{
        if(isEdit){
            return (
                <div className="listItemBorder">
                    <ButtonGenerator
                        list={editBtn}
                    />
                    <AddEditItem
                        iName={iName}
                        setiName={setiName}
                        iDesc={iDesc}
                        setiDesc={setiDesc}
                        iDueDate={iDueDate}
                        setiDueDate={setiDueDate}
                        isOptional={true}
                        isComplete={isComplete}
                        setIsComplete={setIsComplete}
                        onClick={onEditSubmissionClick}
                        submitTitle={"Update Item"}
                    />
                </div>
            )
        }
        else{
            return (
                <div className="listItemBorder">
                    <ButtonGenerator
                        list={editBtn}
                    />
                    <ReadOnlyItem 
                        item={item_}
                    />
                </div>
            )
        }
        
    }
    
    return (
        <SwitchComp />
    )
}

export default SwitchBetween