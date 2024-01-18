// taskSlice.js

import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      sessionStorage.setItem("tasks", JSON.stringify(state));
    },
    removeTask: (state, action) => {
      const filteredTasks = state.filter((task) => task.id !== action.payload);
      sessionStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return filteredTasks;
    },
    toggleTask: (state, action) => {
      const updatedTasks = state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      sessionStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    },
    setDueDate: (state, action) => {
      const { id, dueDate } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.dueDate = dueDate;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask, setDueDate } = tasksSlice.actions;

export default tasksSlice.reducer;
