import React from 'react'
import { FaEdit } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

import '../App.css';

function Todo() {
    return (

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                ilk Todo
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' />

                <FaEdit className='todo-icons' />
            </div>

        </div>
    )
}

export default Todo
