import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleTodo } from '../Features/TodoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [updatedText, setUpdatedText] = useState('')
    const [editMode, setEditMode] = useState(null)

    const handleUpdate = (todo) => {
        dispatch(updateTodo({ id: todo, text: updatedText }))
        setUpdatedText('')
        setEditMode(null)
    }

    const handeltoggletodo = (todo) => {
        dispatch(toggleTodo(todo.id))
    }

    return (
        <div className="container mx-auto px-4">
            <ul className="list-none mt-10 space-y-4">
                {todos.map((todo) =>
                    <li className={`flex flex-col md:flex-row mt-4 justify-between shadow-amber-300 items-center ${todo.completed ? 'bg-slate-700' : 'bg-zinc-800'} bg-opacity-75 px-4 md:px-8 py-2 rounded-3xl`} key={todo.id}>
                        {editMode === todo.id ? (
                            <div className="flex flex-col md:flex-row items-center w-full md:space-x-4">
                                <input
                                    type='text'
                                    placeholder='Enter updated text'
                                    className='text-white text-xl md:text-2xl border-blue-300 bg-gray-500 px-3 py-2 rounded-3xl w-full md:w-auto'
                                    value={updatedText}
                                    onChange={(e) => setUpdatedText(e.target.value)}
                                />
                                <button onClick={() => handleUpdate(todo.id)}
                                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg md:text-xl px-5 py-2.5 text-center mt-2 md:mt-0">
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row items-center w-full justify-between">
                                <div className="flex items-center w-full md:w-auto">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handeltoggletodo(todo)}
                                        className="mx-3 transform scale-150"
                                    />
                                    <div className={`text-white text-xl md:text-2xl ${todo.completed ? 'line-through' : ''}`}>{todo.text}</div>
                                </div>
                                <div className="flex space-x-4 items-center mt-2 md:mt-0">
                                    {!todo.completed && (
                                        <button onClick={() => setEditMode(todo.id)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-xl text-lg md:text-xl px-5 py-2.5 text-center">
                                            Edit
                                        </button>
                                    )}
                                    <button onClick={() => dispatch(removeTodo(todo.id))} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-xl text-lg md:text-xl px-5 py-2.5 text-center">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Todos
