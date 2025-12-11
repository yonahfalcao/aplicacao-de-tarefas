import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <h3>📝 {task.title}</h3>
          <p>{task.description}</p>

          <Link to="/add-task" state={{ editing: task }}>
            <button>✏️ Editar</button>
          </Link>

          <button onClick={() => removeTask(task.id)} className="delete-btn">
            🗑 Excluir
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
