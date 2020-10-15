import React from 'react';
import { MdRemoveCircle, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import './ToDoListItem.css';
import Class from 'classnames';

function ToDoListItem({todo,onRemove,onToggle}) {
    const {id,text,checked} = todo;
    return (
        <div className="ToDoListItem">
            <div className={Class('checkbox',{checked})} onClick={()=>onToggle(id)}>
                { checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
            </div>
            <div className={Class('text',{checked})}>{text}</div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdRemoveCircle />
            </div>
        </div>
        
    );
  }
  export default ToDoListItem;