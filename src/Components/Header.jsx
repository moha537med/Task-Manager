import React from 'react';

export default function Header() {
  return (
    <header className="p-6 text-center bg-gray-800 text-white rounded-t-lg shadow">
      <h1 className="text-3xl font-bold">Task Manager App</h1>
      <p className="text-sm mt-1 text-blue-100">Keep track of your tasks efficiently</p>
    </header>
  );
}
