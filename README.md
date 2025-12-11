erenciador de Tarefas – React, Context API & LocalStorage

Este projeto é um Gerenciador de Tarefas moderno, desenvolvido em React, utilizando:

React Router para navegação

Context API para gerenciamento global de estado

LocalStorage para persistência de dados

Hooks do React (useState, useEffect, useContext)

CSS moderno com Glassmorphism + Neon

O app permite adicionar, editar e excluir tarefas, com interface limpa e responsiva.
src/
│
├── components/
│   ├── TaskForm.js        # Formulário de criar/editar tarefas
│   └── TaskList.js        # Listagem das tarefas
│
├── context/
│   └── TaskContext.js     # Contexto global das tarefas
│
├── pages/
│   ├── AddTask.js         # Página de adicionar/editar tarefa
│   └── Home.js            # Lista de tarefas
│
├── App.js                 # Estrutura principal, navbar e rotas
├── index.js               # Entrada do React
└── styles.css             # Estilos globais (Glassmorphism + Neon)
⚙️ Tecnologias Utilizadas
✔ React.js

Biblioteca principal usada para criar a interface do usuário.

✔ React Router DOM

Usado para criar as páginas:

/ → Home (lista de tarefas)

/add-task → Adicionar nova tarefa (ou editar)

✔ Context API

Usado para gerenciar globalmente:

Lista de tarefas (tasks)

Funções: addTask, editTask, removeTask

Isso evita o prop drilling e deixa o código mais limpo.

✔ LocalStorage

Todas as tarefas ficam armazenadas no navegador:

Nunca são apagadas ao recarregar

O estado é carregado ao iniciar a aplicação

✔ React Hooks

Utilizados em vários pontos:

useState() → Gerencia os valores dos inputs e a lista de tarefas

useEffect() → Sincroniza com o LocalStorage

useContext() → Acessa o TaskContext

useNavigate() → Redireciona após salvar

useLocation() → Passa tarefa para edição

✔ CSS Moderno

Glassmorphism

Botões neon com animação

Navbar fixa com blur

Layout centralizado

🧠 Como Cada Arquivo Funciona
📌 TaskContext.js

Gerencia todas as tarefas da aplicação.

Funções principais:

addTask() → adiciona nova tarefa

editTask() → altera tarefa existente

removeTask() → exclui tarefa

Sincroniza automaticamente com LocalStorage via useEffect

📌 TaskForm.js

Formulário reutilizável para criar ou editar tarefas.

Preenche campos automaticamente se estiver editando

Ao enviar:

Se editingTask existe → chama editTask()

Senão → chama addTask()

Redireciona para /tasks (Home)

📌 TaskList.js

Mostra todas as tarefas com:

Título

Descrição

Botão Editar

Botão Excluir

O botão de editar usa:

<Link to="/add-task" state={{ editing: task }}>


Passando a tarefa para o formulário.

📌 AddTask.js

Página que recebe a tarefa via location.state:

Se tiver tarefa → modo edição

Senão → modo adicionar

Renderiza o <TaskForm />.

📌 Home.js

Página principal:

Mostra a lista de tarefas com <TaskList />

Integrada ao TaskContext

📌 App.js

Configura a navbar

Carrega TaskProvider

Define as rotas

Botões de navegação

📜 Licença

Projeto livre para fins de estudo.


Desenvolvido por Yonah Falcão em parceria com DEVStart SENAI
