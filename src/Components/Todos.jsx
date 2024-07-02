import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo,updateTodo,toggleTodo ,completedTodo} from '../Features/TodoSlice'


function Todos() {

    const todos=useSelector(state => state.todos)
    const dispatch=useDispatch()
    const [updatedText,setUpdatedText]=useState('')
    const [editMode,setEditMode]=useState(null)

    const handleUpdate =(todo)=>{
        dispatch(updateTodo({id: todo,text:updatedText}))
        setUpdatedText('')
        setEditMode(null)
    }

    const handeltoggletodo =(todo)=>{
        dispatch(toggleTodo(todo.id))
    }
    

    
  return (
    <>

    <ul className='list-none mt-10'>
        {todos.map((todo)=>
            <li className={`flex mt-4 justify-between shadow-amber-300 items-center ${todo.completed ? 'bg-slate-700' : 'bg-zinc-800'} bg-opacity-75 px-8 py-1 rounded-3xl`} key={todo.id}>
                
                {editMode === todo.id ? (
                    <>
                    <input 
                        type='text'
                        placeholder='Enter updated text'
                        className='text-white text-2xl border-blue-300 bg-gray-500 px-3 py-2 ml-[-26px] rounded-3xl'
                        value={updatedText}
                        onChange={(e)=>setUpdatedText(e.target.value)}
                    />
                    <button onClick={() => handleUpdate(todo.id)} 
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 mt-1 ">
                    Save
                    </button>
                    </>
                ):(
                    <>
                    <input
                            type="checkbox"
                            checked={todo.completed}
                            onClick={() => handeltoggletodo(todo)}
                            className="mx-3 mr-4 transform scale-[2.5]"
                        />
                    <div className={`ml-[-700px] text-white text-2xl text-wrap ${todo.completed ? 'line-through':''}`}>{todo.text}</div>
                    <div className='flex space-x-4 items-start'>
                    <div>
                        { !todo.completed && (
                        <button onClick={()=>setEditMode(todo.id)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-xl text-xl px-5 py-2.5 text-center me-2 mt-1  ">Edit</button>
                       )}
                    </div>
                    <div>
                        <button onClick={()=>dispatch(removeTodo(todo.id))} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-xl text-xl px-5 py-2.5 text-center me-2 mb-2 mt-1" >Delete</button>
                    </div>
                    </div>
                    </>
                )}
            </li>
        )}
    </ul>
    </>
  )
}

export default Todos