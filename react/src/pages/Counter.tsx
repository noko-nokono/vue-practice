import React, { useState } from 'react';
import Button from '@/components/Button';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter Page</h1>
      <p>{count}</p>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default Counter;