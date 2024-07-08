import React from 'react';

export default function Navbar() {
    return (
        <div className="bg-gray-900 text-white">
            <div className="container mx-auto flex justify-between items-center px-4 py-6">
                <div className="flex items-center">
                    <a href="#" to="/" className="text-2xl font-bold cursor-pointer">Quizy</a>
                    <a href="#" to="/" className="ml-4 text-lg hover:bg-gray-800 px-4 py-2 rounded">Home</a>
                    <a href="#" to="/" className="ml-4 text-lg hover:bg-gray-800 px-4 py-2 rounded">Features</a>
                    <a href="#" to="/help" className="ml-4 text-lg hover:bg-gray-800 px-4 py-2 rounded">Help</a>
                </div>
                <div className="flex items-center">
                    <a href="#" to="/login" className="text-lg hover:bg-blue-500 bg-blue-400 px-4 py-2 rounded">Login</a>
                    <a href="#" to="/register" className="ml-4 text-lg hover:bg-green-500 bg-green-400 px-4 py-2 rounded">Sign up</a>
                </div>
            </div>
        </div>
    );
}