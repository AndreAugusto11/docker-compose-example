import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      setUsers(response.data);
    }).catch((err) => console.error(err));
  }, []);

  const handleSubmit = (event) => {
    const newUser = {
      name: name,
      age: age
    }
    event.preventDefault();
    axios.post("http://localhost:5000/user", newUser)
      .then(() => {
        setUsers(state => [...state, newUser])
      });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="Name" value={name} placeholder="Your name.." onChange={(e) => setName(e.target.value)} />

          <label>Age</label>
          <input type="text" name="Age" value={age} placeholder="Your age.." onChange={(e) => setAge(e.target.value)} />

          <input type="submit" />
        </form>
      </div>
      <div>
        <hr />
        <h2>List of users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map(function (user) {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
