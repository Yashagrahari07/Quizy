import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto flex justify-between items-center px-4 py-6">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold cursor-pointer">Quizy</Link>
                    <Link to="/" className="ml-4 text-lg hover:bg-gray-800 px-4 py-2 rounded">Home</Link>
                    <Link to="/" className="ml-4 text-lg hover:bg-gray-800 px-4 py-2 rounded">Features</Link>
                    <Link to="/" className="ml-4 text-lg hover:bg-gray-800 px-4 py-2 rounded">Help</Link>
                </div>
                <div className="flex items-center">
                    <Link to="/login" className="text-lg hover:bg-blue-500 bg-blue-400 px-4 py-2 rounded">Login</Link>
                    <Link to="/signup" className="ml-4 text-lg hover:bg-green-500 bg-green-400 px-4 py-2 rounded">Sign up</Link>
                </div>
            </div>
        </div>
    );
}