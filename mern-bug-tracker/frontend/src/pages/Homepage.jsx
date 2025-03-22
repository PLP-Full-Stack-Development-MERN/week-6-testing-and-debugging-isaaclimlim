import React, { useEffect, useState } from 'react';
import { fetchBugs, createBug, updateBug, deleteBug } from '../utils/api';

const HomePage = () => {
  const [bugs, setBugs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchBugs()
      .then(response => setBugs(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleCreateBug = () => {
    createBug({ title, description }).then(response => {
      setBugs([...bugs, response.data]);
      setTitle('');
      setDescription('');
    });
  };

  const handleUpdateBug = (id, status) => {
    updateBug(id, { status }).then(response => {
      setBugs(bugs.map(bug => (bug._id === id ? response.data : bug)));
    });
  };

  const handleDeleteBug = (id) => {
    deleteBug(id).then(() => {
      setBugs(bugs.filter(bug => bug._id !== id));
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Bug Tracker</h1>
      <input className="border p-2 m-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bug title" />
      <input className="border p-2 m-2" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Bug description" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreateBug}>Report Bug</button>
      <ul className="mt-4">
        {bugs.map(bug => (
          <li key={bug._id} className="p-2 border-b flex justify-between items-center">
            {bug.title} - {bug.status}
            <div>
              <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2" onClick={() => updateBug(bug._id, 'in-progress')}>In Progress</button>
              <button className="bg-green-500 text-white px-2 py-1 rounded mr-2" onClick={() => updateBug(bug._id, 'resolved')}>Resolve</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteBug(bug._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;