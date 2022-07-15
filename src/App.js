import TableGrid from "./components/TableGrid";
import "./styles.css";
import React, { useState, useEffect } from "react";
import { todosAPI, usersAPI } from "./services/data.api";
// First
// show todos data with header: ["userId","title","completed"]

// Second
// show users data with header: [ "userId", "name","address"] // address should include stree|suite| city:

// Third
// show todos data with header: ["name","title","completed"]

export default function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(todosAPI)
      .then((res) => res.json())
      .then((todosData) => {
        setTodos(todosData);
      });
    fetch(usersAPI)
      .then((res) => res.json())
      .then((usersData) => {
        setUsers(usersData);
      });
  }, []);

  // console.log(todos);
  return (
    <div className="App">
      <TableGrid data={todos} header={["userId", "title", "completed"]} />

      <TableGrid data={users} header={["userId", "name", "address"]} />

      {/* <TableGrid data={todosWithUser} header={["name","title","completed"]}/> */}
    </div>
  );
}
