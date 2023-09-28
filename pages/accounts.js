import React, { useState } from 'react';
import Layout from '../components/Layout';

const Account = () => {
  const [userData, setUserData] = useState({
    name: 'Sagar Rath',
    email: 'sagarrath580@gmail.com',
  });
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData({ ...userData, name: userData.name, email: userData.email });
    setPassword(newPassword);
  
    setNewPassword('');
    setAvatar(null);
    setSuccessMessage('Account information updated successfully');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <Layout>
      <div className="bg-black p-6 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">Account Management</h1>
        {successMessage && (
          <div className="bg-green-300 p-2 mb-4 rounded-md">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="avatar" className="text-white block mb-1">
              Avatar:
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
              className="bg-gray-300 text-black rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="text-white block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-300 text-black rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-300 text-black rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-white block mb-1">
              Current Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-300 text-black rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="text-white block mb-1">
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 bg-gray-300 text-black rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Update Account
          </button>
        </form>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Current Information:</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
