import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0)
    return <p className="p-4 text-center text-gray-500">No tasks yet — add one!</p>;

  return (
    <ul>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
}
