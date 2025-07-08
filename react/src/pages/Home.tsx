import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const list = [
    { name: 'Counter', path: '/counter' },
    { name: 'Todo', path: '/todo' },
    { name: 'Data Fetch', path: '/data-fetch' },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <ul className="list">
        {list.map((item) => (
          <li key={item.name} className="list-item">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;