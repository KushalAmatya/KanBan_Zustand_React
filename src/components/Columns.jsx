import { useState } from "react";
import { useStore } from "../store";
import Task from "./Task";
import useLocalStorage from "../utils/useLocalStorage";
import { FaTimes } from "react-icons/fa";

export default function Columns({ state }) {
  const [text, setText] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const { addItem, data } = useLocalStorage();
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );
  console.log(tasks);
  const addTask = useStore((store) => store.addTask);
  return (
    <div className="text-white bg-gray-800 min-h-80 w-1/3 max-w-80 mt-4 mr-2 ml-2 rounded p-2">
      <div className="flex justify-between">
        <p className="font-serif text-xl">{state}</p>
        <button
          onClick={() => {
            setIsAdding(true);
          }}
          className="bg-green-500 hover:bg-green-600 text-gray-200 hover:text-gray-400 rounded p-1 "
        >
          Add
        </button>
      </div>
      {tasks.map((task, index) => (
        <Task title={task.title} key={index} />
      ))}
      {isAdding && (
        <div className="absolute bg-black bg-opacity-50 w-full h-full top-0 left-0">
          <div className="bg-white absolute z-10 p-4 w-80 top-1/3 left-1/2 flex justify-center -translate-x-1/2 -translate-y-full">
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
              className="text-black border border-black p-1 space-x-1 mr-1"
            />

            <div className="flex justify-between gap-2">
              <button
                className="bg-green-500 hover:bg-green-600 text-gray-200 hover:text-gray-400"
                onClick={() => {
                  addTask(text, state);
                  setText("");
                  setIsAdding(false);
                  addItem({ title: text, state });
                }}
              >
                Add task
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-gray-200 hover:text-gray-400"
                onClick={() => {
                  setIsAdding(false);
                }}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
