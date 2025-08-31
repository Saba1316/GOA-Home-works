import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return; // 
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>To Do List</h2>
      <input 
        type="text" 
        value={task} 
        onChange={e => setTask(e.target.value)} 
        placeholder="Enter a task..." 
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTask(i)}>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;



// // ✅ Hooks are special functions in React.
// // They let functional components "hook into" React features like state, lifecycle methods, etc.
// // Before hooks, these features were only available in class components.

// // ✅ useState is one of the most commonly used hooks.
// // It lets you add and manage state (data that can change) inside a functional component.

// import React, { useState } from 'react';

// function ExampleComponent() {
//   // 🔽 We use the useState hook here.
//   // It returns an array with two elements:
//   // 1. The current state value (here it's "count")
//   // 2. A function to update that state (here it's "setCount")

//   const [count, setCount] = useState(0); // Initial state is set to 0

//   // ✅ When we call setCount with a new value, the component re-renders,
//   // and the updated count is shown in the UI.

//   return (
//     <div>
//       <p>Count: {count}</p>

//       {/* 🔘 When the button is clicked, setCount updates the state */}
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default ExampleComponent;