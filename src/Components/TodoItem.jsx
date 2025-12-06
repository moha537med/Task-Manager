import React, { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEditStart = () => {
    setEditing(true);
    setText(todo.text);
  };

  const handleSave = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onEdit(todo.id, trimmed);
    setEditing(false);
  };

  return (
    <li className="flex items-center gap-3 p-2 border-b hover:bg-gray-50 transition">
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      {editing ? (
        <>
          <input
            className="flex-1 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); }}
          />
          <button onClick={handleSave} className="px-2 py-1 rounded bg-green-500 hover:bg-green-700 transition text-white cursor-pointer">Save</button>
          <button onClick={() => setEditing(false)} className="px-2 py-1 rounded hover:bg-gray-300 transition">Cancel</button>
        </>
      ) : (
        <>
          <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.text}</span>
          <button onClick={handleEditStart} className="px-2 py-1 rounded bg-yellow-200 hover:bg-yellow-300 transition">Edit</button>
          <button onClick={() => onDelete(todo.id)} className="px-2 py-1 rounded bg-red-300 hover:bg-red-500 transition">Delete</button>
        </>
      )}
    </li>
  );
}
