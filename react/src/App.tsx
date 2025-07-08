import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Todo from './pages/Todo';
import DataFetch from './pages/DataFetch';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1 className="red">Hello World</h1>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/data-fetch" element={<DataFetch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;