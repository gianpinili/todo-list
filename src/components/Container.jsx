import { Dot, SquarePlus, CircleX, Check } from "lucide-react";
import { useState, useEffect } from "react";
import Completed from "./Completed";

function Container() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []); // Only run once when the component mounts

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== "") {
      const newTask = { text: taskInput, completed: false };
      setTasks([...tasks, newTask]);
      setTaskInput("");
      saveTasks([...tasks, newTask]); // Save tasks to localStorage after adding a new task
    }
  };

  const toggleTaskAdd = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    saveTasks(updatedTasks); // Save tasks to localStorage after toggling completion status
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveTasks(updatedTasks); // Save tasks to localStorage after deleting a task
  };

  const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <>
      <div className="mx-16 border border-white h-[50rem] rounded-md">
        <div className=" my-2 mx-5 flex relative">
          <input
            type="text"
            className=" text-white bg-transparent border-b border-[#fafafa] w-full px-4 py-2 focus:border-green-500 focus:outline-none mb-4 placeholder:text-[#9a9595]"
            placeholder="What do you want to do today?"
            onChange={handleInputChange}
            value={taskInput}
          />
          <SquarePlus
            className="w-[1.75rem] h-[1.75rem] absolute text-white right-1 top-2 hover:cursor-pointer hover:text-[green] hover:scale-[1.1] duration-200"
            onClick={addTask}
          />
        </div>
        {tasks.map((task, index) => (
          <div className="mb-2 mx-4 flex relative text-white" key={index}>
            <Dot
              className={task.completed ? "text-green-500" : "text-white"}
              onClick={() => toggleTaskAdd(index)}
            />
            <p
              className={task.completed ? "line-through ml-2" : "ml-2 w-[70%]"}
              onClick={() => toggleTaskAdd(index)}
            >
              {task.text}
            </p>
            <button className="ml-auto absolute right-12">
              <Check className="w-[1.75rem] h-[1.75rem] hover:scale-[1.1] hover:text-blue-400 duration-200" />
            </button>
            <button
              className="ml-auto absolute right-2"
              onClick={() => deleteTask(index)}
            >
              <CircleX className="w-[1.75rem] h-[1.75rem] hover:scale-[1.1] hover:text-red-600 duration-200" />
            </button>
          </div>
        ))}
        <Completed />
      </div>
    </>
  );
}

export default Container;
