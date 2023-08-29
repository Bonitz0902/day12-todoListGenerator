import { createSlice } from "@reduxjs/toolkit";


const todoListSlice = createSlice({
  name: "todo",
  initialState: {
   todoList : [],
  },
  reducers: {
    addTodo: (state, action) => {
        state.todoList = [...state.todoList, action.payload];
    },
    toggleDone: (state, action) =>{
        const index = state.todoList.findIndex(todo => todo.id === action.payload);
        state.todoList[index].done = !state.todoList[index].done;
    },
    deleteTodo: (state, action) => {
      const index = state.todoList.findIndex(todo => todo.id === action.payload);
      state.todoList.splice(index, 1);
    }

  },
});

export const { addTodo, toggleDone, deleteTodo } = todoListSlice.actions;
export default todoListSlice.reducer;