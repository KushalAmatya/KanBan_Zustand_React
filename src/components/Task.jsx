import React from "react";
import { useStore } from "../store";
import { FaTrash } from "react-icons/fa";

export default function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const removeTask = useStore((store) => store.removeTask);
  return (
    <div className="bg-white flex flex-col justify-between rounded min-h-20 text-gray-800 p-2 mt-2">
      <div>{task.title}</div>
      <div className="flex justify-between">
        <div>
          <button onClick={() => removeTask(task.title)}>
            <FaTrash className="text-red-500" />
          </button>
        </div>
        <div
          className={`font-bold text-base p-1 ${
            task.state == "PLANNED" || task.state == "ONGOING"
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        >
          {task.state}
        </div>
      </div>
    </div>
  );
}
