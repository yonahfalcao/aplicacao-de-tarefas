import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import { TaskProvider } from "./context/TaskContext";
import "./styles.css"; //

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <nav className="navbar">
          <h2>Gerenciador de Tarefas</h2>
        </nav>
        <div>
          <Link to="/App">
            <button>Inicio</button>
          </Link>
          <Link to="/">
            <button>Suas Tarefas</button>
          </Link>

          <Link to="/add-task">
            <button>➕ Adicionar Nova Tarefa</button>
          </Link>
        </div>
        {/* ROTAS */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </TaskProvider>
    </Router>
  );
};

export default App;
