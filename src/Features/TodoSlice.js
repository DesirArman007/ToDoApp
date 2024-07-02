import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1 , text:'Hello',completed:false}]
}

export const TodoSlice= createSlice({
                name:'todo',
                initialState,
                reducers:{
                    
                    addTodo:(state,action)=>{
                        const todo={
                            id:nanoid(),
                            text:action.payload,
                            completed:false
                            
                        }
                        state.todos.push(todo)
                    },
                    removeTodo:(state,action)=>{
                        state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
                    },
                    updateTodo:(state,action)=>{
                        const {id}=action.payload
                        const toupdate=state.todos.find((todo)=>todo.id===id)
                        if(toupdate){
                            toupdate.text=action.payload.text
                        }
                    },
                    toggleTodo:(state,action)=>{
                        const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload);
                        if (todoIndex!== -1) {
                            state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
                        }
                    },
                    deleteAllTodo:(state,action)=>{
                        state.todos=[];
                    },
                    completedTodo:(state,action)=>{
                        state.todos=state.todos.map((todo)=>todo.completed===true)
                    }
                    
                }
})

export const {addTodo,removeTodo,updateTodo,toggleTodo,deleteAllTodo,completedTodo}=TodoSlice.actions
export default TodoSlice.reducer