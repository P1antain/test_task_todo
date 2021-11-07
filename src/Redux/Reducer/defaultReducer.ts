import { createSlice } from "@reduxjs/toolkit";

export interface ToDo {
  id: number;
  text: string;
  date: string;
  executed: boolean;
}

export interface DefaultState {
  task: ToDo[];
}

const initialState: DefaultState = {
  task: [],
};

export const defaultReducer = createSlice({
  name: "Default",
  initialState,
  reducers: {
    getTask(state, action) {
      // Новый элемент который добавиться в туду
      let toDo: ToDo = {
        id: Number(Date.now().toString()),
        text: action.payload,
        date: new Date().toLocaleTimeString(),
        executed: false,
      };
      //Проверка уникальности туду
      const helper = state.task.some((u) => u.text === action.payload);
      if (helper) {
        return state;
      }
      return {
        ...state,
        task: [...state.task, toDo],
      };
    },
    //Выполняем туду
    editTaskExecuted(state, action) {
      return {
        ...state,
        task: state.task.map((u) => {
          if (u.id === action.payload) {
            return { ...u, executed: !u.executed };
          }
          return u;
        }),
      };
    },
    //Удаляем туду
    deleteTask(state, action) {
      return {
        ...state,
        task: state.task.filter((u) => u.id !== action.payload),
      };
    },
    //Редактируем имя туду
    editTaskText(state, action) {
      return {
        ...state,
        task: state.task.map((u) => {
          if (u.id === action.payload.elem) {
            return { ...u, text: action.payload.result };
          }
          return u;
        }),
      };
    },
  },
});

export const { getTask, editTaskExecuted, deleteTask, editTaskText } =
  defaultReducer.actions;

export default defaultReducer.reducer;
