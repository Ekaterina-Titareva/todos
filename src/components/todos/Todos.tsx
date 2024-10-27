import React, { useState } from "react";
import { addTask, toggleTask, deleteTask } from "../../store/actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import style from "./todos.module.css";

const Todos: React.FC = () => {
  const [task, setTask] = useState("");
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <main className={style.container}>
      <h1>Список задач</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Добавить задачу"
      />
      <button
        type="button"
        className={style.add_button}
        onClick={handleAddTask}
      >
        Добавить задачу
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? style.completed : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(index))}
            />
            {task.text}
            <button
              type="button"
              className={style.delete_button}
              onClick={() => dispatch(deleteTask(index))}
            ></button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Todos;
