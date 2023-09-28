import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: userData.length + 1, 
      name: formData.name,
      email: formData.email,
    };
 
    setUserData([...userData, newUser]);
    setFormData({ name: "", email: "" });
  };

  return (
    <Layout>
      <div className="bg-black p-6 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">User List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="name" className="text-white block mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-300 text-black rounded"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="email" className="text-white block mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-300 text-black rounded"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white mt-2 py-1 px-2 rounded hover:bg-red-700"
              >
                Add User
              </button>
            </form>
            <table className="min-w-full">
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      {user.id}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      {user.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Users;
