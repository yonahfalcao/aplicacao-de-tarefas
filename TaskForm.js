import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ editingTask }) => {
  const { addTask, editTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTask) {
      editTask({ ...editingTask, title, description });
    } else {
      addTask({ id: Date.now(), title, description });
    }

    navigate("/tasks"); // Volta para lista de tarefas
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">
        {editingTask ? "Salvar Alterações" : "Adicionar Tarefa"}
      </button>
    </form>
  );
};

export default TaskForm;
