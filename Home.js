import React, { useContext } from "react";
import TaskList from "../components/TaskList";
import { TaskContext } from "../context/TaskContext";

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="container">
      <h1>Suas Tarefas</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
