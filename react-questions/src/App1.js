import { useEffect, useState } from "react";
import "./App.css";

function App1() {
  const [todos, setTodos] = useState([]);
  const [groupedTodos, setGroupedTodos] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/todos?limit=10&skip=80");
        const data = await res.json();
        console.log(data);
        setTodos(data.todos);
        const group = data.todos.reduce((acc, todo) => {
          if (!acc[todo.userId]) {
            acc[todo.userId] = [];
          }
          acc[todo.userId].push(todo);
          return acc;
        }, {});
        setGroupedTodos(group);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {Object.keys(groupedTodos).map((userId) => (
        <div key={userId}>
          <h2>User ID : {userId}</h2>
          <ul>
            {groupedTodos[userId].map((todoItem) => (
              <li key={todoItem.id}>{todoItem.todo}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App1;
