import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddEditItem = ({iName, setiName, iDesc, setiDesc, iDueDate, setiDueDate, isOptional, isComplete, setIsComplete, submitTitle, onClick}) => {
    const OptionalIsComplete = () => {
        if(isOptional)
        {
            return (
                <div>
                    <label className="label">Is Completed:</label>
                    <div>
                        <input 
                            id="item-name"
                            className="form-control"
                            style={{ margin: 5 }}
                            type="radio"
                            value={isComplete}
                            onChange = {(x) => setIsComplete(x.target.value)}
                        />
                    </div>
                </div>
            )
        } 
        else
        {
            return (
                <></>
            )
        }
    }

    return (
        <div className="form-group">
        <label className="label">Name:</label>
        <div>
            <input 
                id="item-name"
                className="form-control"
                style={{ margin: 5 }}
                type="text"
                value={iName}
                onChange = {(x) => setiName(x.target.value)}
            />
        </div>
        <label className="label">Description:</label>
        <div>
            <input 
                id="item-description"
                className="form-control"
                style={{ margin: 5 }}
                type="text"
                value={iDesc}
                onChange = {(x) => setiDesc(x.target.value)}
            />
        </div>
        <label className="label">Due Date:</label>
        <div style={{ margin: 5 }}>
            <DatePicker
                selected={iDueDate}
                onChange={x => setiDueDate(x)}
            />
        </div>
        <OptionalIsComplete />
       <button
            className="btn btn-success"
            style={{ margin: 5 }}
            onClick={onClick}
       >
           {submitTitle}
       </button>
    </div>
    )
}

export default AddEditItem