import React from 'react';

export default function Filters({ filter, setFilter, clearCompleted }) {
  const buttonClass = (f) =>
    `px-3 py-1 rounded transition ${
      filter === f ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-200'
    }`;

  return (
    <div className="flex gap-2 items-center p-4">
      <div className="flex gap-1">
        <button className={buttonClass('all')} onClick={() => setFilter('all')}>All</button>
        <button className={buttonClass('active')} onClick={() => setFilter('active')}>Active</button>
        <button className={buttonClass('completed')} onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <div className="ml-auto text-sm">
        <button onClick={clearCompleted} className="underline hover:text-red-500 transition">
          Clear completed
        </button>
      </div>
    </div>
  );
}
