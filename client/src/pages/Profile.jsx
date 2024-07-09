import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { 
  updateUserStart, updateUserSuccess, updateUserFailure, 
  deleteUserStart, deleteUserSuccess, deleteUserFailure, 
  signOutStart, signOutSuccess, signOutFailure 
} from '../app/user/userSlice';
import { uploadProfilePicture } from '../cloudinary';

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
  });
  const [fileUploadError, setFileUploadError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = async (file) => {
    try {
      const uploadedUrl = await uploadProfilePicture(file); // Function to upload picture to Cloudinary
      setFormData({ ...formData, avatar: uploadedUrl });
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      setFileUploadError(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      console.log(currentUser);
      console.log(formData);
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      navigate('/signup');
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (!res.ok) {
        dispatch(signOutFailure(data.message));
        return;
      }
      dispatch(signOutSuccess(data));
      navigate('/login');
    } catch (error) {
      dispatch(signOutFailure(error.message));
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg mt-10 mb-10">
          <h1 className="text-3xl font-semibold text-center mb-6">Profile</h1>
          <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-4">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                ref={fileRef}
                hidden
                onChange={handleFileSelect}
              />
              <img
                src={formData.avatar || currentUser.avatar}
                className="rounded-full h-24 w-24 object-cover cursor-pointer"
                alt="profile"
                onClick={() => fileRef.current.click()}
              />
            </div>
          </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              {loading ? 'Loading...' : 'Update Profile'}
            </button>
          </form>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleDeleteUser}
              className="text-red-500 hover:underline"
            >
              Delete Account
            </button>
            <button
              onClick={handleSignOut}
              className="text-teal-500 hover:underline"
            >
              Sign Out
            </button>
          </div>
          {error && <p className='text-red-500 mt-4'>{error}</p>}
          {updateSuccess && <p className="text-green-500 mt-4">Profile updated successfully</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
