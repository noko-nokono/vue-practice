import React, { useState } from 'react';
import Button from '@/components/Button';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const Todo: React.FC = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: false },
  ]);

  const updateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: title,
        completed: false,
      },
    ]);
    setTitle('');
  };

  const completedTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h1>Todo Page</h1>
      <div>
        <input value={title} onChange={updateTitle} />
        <Button onClick={addTodo}>追加</Button>
      </div>
      <ul>
        {todos
          .filter(todo => !todo.completed)
          .map((item) => (
            <li key={item.id}>
              <div className="item">
                {item.title}
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => completedTodo(item.id)}
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;