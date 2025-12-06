import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import TodoInputs from './Components/TodoInputs';
import Filters from './Components/Filters';
import TodoList from './Components/TodoList';
import Stats from './Components/Stats';


export default function App() {
 const [todos, setTodos] = useState(() => {
    const raw = localStorage.getItem('todos_v1');
    return raw ? JSON.parse(raw) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos_v1', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => setTodos(prev => [{ id: Date.now().toString(), text, completed: false }, ...prev]);
  const toggleTodo = (id) => setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTodo = (id) => setTodos(prev => prev.filter(t => t.id !== id));
  const editTodo = (id, newText) => setTodos(prev => prev.map(t => t.id === id ? { ...t, text: newText } : t));
  const clearCompleted = () => setTodos(prev => prev.filter(t => !t.completed));

  const filteredTodos = todos.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'active') return !t.completed;
    return t.completed;
  });

  // Progress Bar
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const progress = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-r from-purple-600 via-blue-500 to-sky-400 transition-colors">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg ">
        <Header />
        <TodoInputs onAdd={addTodo} />
        <Filters filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded mb-4">
          <div
            style={{ width: `${progress}%` }}
            className="h-2 bg-purple-600  transition-all"
          ></div>
        </div>

        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
        <Stats todos={todos} />
      </div>
    </div>
  );
}