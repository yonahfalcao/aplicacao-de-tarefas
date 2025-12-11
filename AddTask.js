import React from "react";
import TaskForm from "../components/TaskForm";
import { useLocation } from "react-router-dom";

const AddTask = () => {
  const location = useLocation();
  const editing = location.state?.editing || null;

  return (
    <div className="container">
      <h1>{editing ? "Editar Tarefa" : "Adicionar Tarefa"}</h1>
      <TaskForm editingTask={editing} />
    </div>
  );
};

export default AddTask;
