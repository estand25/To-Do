import React from 'react'

const ReadOnlyItem = ({item}) => {
    return (
        <div>
            <div>
                <label className="label">Name:</label>
                <label className="label">{item.name}</label>
            </div>
            <div>
                <label className="label">Description:</label>
                <label className="label">{item.description}</label>
            </div>
            <div>
                <label className="label">Due Date:</label>
                <label className="label">{item.dueDate}</label>
            </div>
            <div>
                <label className="label">Is Complate?:</label>
                <label className="label">{item.isCompleted ? "True" : "False"}</label>
            </div>
        </div>
    )
}

export default ReadOnlyItem
