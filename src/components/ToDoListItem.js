import React from 'react';
import { MdRemoveCircle, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import './ToDoListItem.css';
import class from 'classnames';

function ToDoListItem({todo,onRemove}) {
    const {id,text,checked,} = todo;
    return (
        <div className="ToDoListItem">
            <div className="checkbox checked" onClick={()=>onToggle(id)}>\
                { checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
            </div>
            <div className="text">{text}</div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdRemoveCircle />
            </div>
        </div>
    );
  }

  
  export default ToDoListItem;