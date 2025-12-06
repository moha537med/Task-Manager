import React from 'react';

export default function Stats({ todos }) {
  const total = todos.length;
  const active = todos.filter(t => !t.completed).length;
  const completed = total - active;

  return (
    <div className="p-4 text-sm text-gray-700 border-t flex justify-between">
      <span>{total} tasks</span>
      <span>{active} <span className='text-red-600'>active</span></span>
      <span>{completed} <span className='text-green-900'>completed</span> </span>
    </div>
  );
}
