import { create } from "zustand";

const store = (set) => {
  const storedTasks = JSON.parse(localStorage.getItem("trelloData")) || [];

  return {
    tasks: storedTasks,
    addTask: (title, state) =>
      set((store) => {
        const updatedTasks = [...store.tasks, { title, state }];

        localStorage.setItem("trelloData", JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
      }),
    removeTask: (title) =>
      set((store) => {
        const updatedTasks = store.tasks.filter((task) => task.title !== title);

        localStorage.setItem("trelloData", JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
      }),
  };
};

export const useStore = create(store);
