import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { item } from '../action';
import { ItemObj } from '../model';
import { AddEditItem ,ReadOnlyItem } from '../components'

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

    const SwitchComp = () =>{
        if(isEdit){
            return (
                <div className="listItemBorder">
                    <div>
                        <button 
                            className="btn btn-success"
                            onClick={onEdit}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={onDeleClick}
                        >
                            Delete
                        </button>
                    </div>
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
                    <div>
                        <button 
                            className="btn btn-success"
                            onClick={onEdit}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={onDeleClick}
                        >
                            Delete
                        </button>
                    </div>
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