import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const fetchTodos = (Value) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${value}`)
      .then(res => setTodos(res.data))
  }

  useEffect(() => {
    fetchTodos(value)
  }, [value]
  )

  const handleSearch = (e) => {
    setValue(e.target.value)
  }

  return (
    <div >
       <h1> Table Data </h1>
       <h2> shown below</h2>
      Search with ID: <input type="text" onChange={handleSearch} />
      <table>
         <tbody>
          <tr>
            <td> id </td>
            <td> title </td>
          </tr>
          <tr>
            <td> {todos.id}</td>
            <td> {todos.title} </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
