import { Dot, SquarePlus, CircleX } from "lucide-react";
import { useState } from "react";

function Container() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      console.log(taskInput);
      setTaskInput(""); // Reset input field
    }
  };

  const toggleTaskAdd = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="mx-16 border border-white h-[50rem] rounded-md">
        <div className=" my-2 mx-5 flex relative">
          <input
            type="text"
            className=" text-white bg-transparent border-b border-[#fafafa] w-full px-4 py-2 focus:border-green-500 focus:outline-none mb-4 placeholder:text-[#484848]"
            placeholder="What do you want to do today?"
            onChange={handleInputChange}
          />

          <SquarePlus
            className="absolute text-white right-9 top-2 hover:cursor-pointer hover:text-[green] hover:scale-[1.1] duration-200"
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
              className={task.completed ? "line-through ml-2" : "ml-2"}
              onClick={() => toggleTaskAdd(index)}
            >
              {task.text}
            </p>
            <button
              className="ml-auto absolute right-10"
              onClick={() => deleteTask(index)}
            >
              <CircleX />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Container;
