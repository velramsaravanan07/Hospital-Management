import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Details.css";

const Patient = ({ onEvent }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await Axios.get("http://localhost:3003/patient");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Please enter all fields before adding a user.");
      return;
    }

    const isExistingUser = users.some((user) => user.name === name);

    if (isExistingUser) {
      alert("User with this name already exists. Please enter a new name.");
      return;
    }

    try {
      if (editingId) {
        // Update existing user
        await Axios.put(`http://localhost:3003/patient/${editingId}`, {
          name,
          email,
          phone,
        });
        setEditingId(null);
      } else {
        // Add new user
        await Axios.post("http://localhost:3003/patient", {
          name,
          email,
          phone,
        });
        clearForm();
      }

      // Reload data after adding/updating user
      await loadData();
      // Emitting the event to the parent component
      onEvent("update");
    } catch (error) {
      console.error("Error adding/updating user:", error);
    }
  };

  const editUser = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
  };

  const deleteUser = async (userId) => {
    try {
      await Axios.delete(`http://localhost:3003/patient/${userId}`);
      // Reload data after deleting user
      await loadData();
      // Emitting the event to the parent component
      onEvent("delete");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
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
        <button className="add" onClick={addUser}>
          {editingId ? "Update" : "Add"}
        </button>

        {loading && <p>Loading...</p>}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
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

export default Patient;
