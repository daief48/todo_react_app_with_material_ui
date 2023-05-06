import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
export default function ListCom(props) {
  return (
    <div className="todo_style">
        <span>
            <DeleteIcon className='deleteIcon' />
        </span>
        <li>{props.text}</li>
    </div>
  )
}
