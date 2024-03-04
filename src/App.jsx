//import * as React from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
//an array of objects
const todoList = [
  {
    id: "1",
    title: "Complete Assignment"
  },
  {
    id: "2",
    title: "Play Chess"
  },
  {
    id: "3",
    title: "Cold Bath"
  }
];

function todo() {
return (
  <div>
    <h1>Todo List</h1>
    <ul>
      {todoList.map(function activities(item) {

      return <li key="idProperty">{item.title}</li>;
    })}
    </ul>
  </div>
  
);
}

export default todo;