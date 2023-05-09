import "./App.css";
import { useEffect, useState } from "react";
import UserDetails from "./components/UserDetails";
const API = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      } else console.log("no data available");
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <div className='App'>
      <h1> DATA GETTING FROM API</h1>
      <div className='test'>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>id</th>
              <th>address</th>
            </tr>
          </thead>

          <tbody>
            <UserDetails users={users} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
