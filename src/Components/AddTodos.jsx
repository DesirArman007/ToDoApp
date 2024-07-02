import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addTodo,deleteAllTodo ,completedTodo} from '../Features/TodoSlice'



function AddTodos() {

    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const todos=useSelector(state=>state.todos)

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    const deleteAllTodoHandler=(e)=>{
        dispatch(deleteAllTodo())
    }

    

  return (
    <form className='space-x-3 mt-12'>
       
       <button 
            type='submit'
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-xl px-5 py-3 text-center me-2 mb-2"
            onClick={addTodoHandler}>
            Add
        </button>
        <input 
            type='text'
            placeholder='Enter your TODO'
            className="bg-gray-300 text-black text-2xl rounded-3xl shadow-xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={input}
            onChange={(e)=> setInput(e.target.value)}
        />
        
        <button 
            type='submit'
            onClick={deleteAllTodoHandler}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-xl px-5 py-3 text-center me-2 mb-2">
            Clear All
        </button>
    </form>
  )
}

export default AddTodos