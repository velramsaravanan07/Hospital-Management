import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Details.css";

const Doctor = ({ onEvent }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await Axios.get("http://localhost:3003/doctors");
    setUsers(response.data);
  };

  const addUser = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !specialist.trim()) {
      alert("Please enter all fields before adding a user.");
      return;
    }

    const isExistingUser = users.some((user) => user.name === name);

    if (isExistingUser) {
      alert("User with this name already exists. Please enter a new name.");
      return;
    }

    const newUser = { name, email, phone, specialist };

    if (editingId) {
      Axios.put(`http://localhost:3003/doctors/${editingId}`, newUser)
        .then(() => {
          setEditingId(null);
          // Emitting the event to the parent component
          onEvent("update");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Axios.post("http://localhost:3003/doctors", newUser)
        .then(() => {
          setName("");
          setEmail("");
          setPhone("");
          setSpecialist("");
          // Emitting the event to the parent component
          onEvent("add");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setTimeout(() => {
      loadData();
    }, 500);
  };

  const editUser = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setSpecialist(user.specialist);
  };

  const deleteUser = (userId) => {
    Axios.delete(`http://localhost:3003/doctors/${userId}`)
      .then(() => {
        // Emitting the event to the parent component
        onEvent("delete");
        loadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="tableWarp">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter The Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter The Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter The Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          name="specialist"
          placeholder="Enter The Specialist"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
        />
        <button className="add" onClick={addUser}>
          {editingId ? "Update" : "Add"}
        </button>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Specialist</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.specialist}</td>
                <td>
                  <button className="edit" onClick={() => editUser(user)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctor;
