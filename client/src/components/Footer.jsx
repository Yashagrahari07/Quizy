import React from 'react';
import { GitHub, LinkedIn, MailOutline, Room, YouTube } from '@mui/icons-material';

export default function Footer() {
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto flex justify-between py-6">
                <div className="w-1/4">
                    <h1 className="font-bold text-xl mb-4">Quizy</h1>
                    <p className="text-sm">Quizy is an online quiz maker platform enabling users to create, share, and take quizzes. It provides immediate feedback on scores and includes features for user login, quiz categories, and leaderboards.</p>
                    <div className="flex mt-4">
                        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 mr-2"><LinkedIn /></a>
                        <a href="#" className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2 mr-2"><GitHub /></a>
                        <a href="#" className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"><YouTube /></a>
                    </div>
                </div>
                <div className="w-1/4">
                    <h3 className="font-bold mb-4">Useful Links</h3>
                    <ul className="list-none p-0">
                        <li className="text-sm mb-2 hover:text-blue-500"><a href="#">Home</a></li>
                        <li className="text-sm mb-2 hover:text-blue-500"><a href="#">Register</a></li>
                        <li className="text-sm mb-2 hover:text-blue-500"><a href="#">Login</a></li>
                        <li className="text-sm mb-2 hover:text-blue-500"><a href="#">Features</a></li>
                        <li className="text-sm mb-2 hover:text-blue-500"><a href="#">Help</a></li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h3 className="font-bold mb-4">Contact</h3>
                    <div className="flex items-center mb-4">
                        <Room style={{ marginRight: "10px" }} />
                        India
                    </div>
                    <div className="flex items-center mb-4">
                        <MailOutline style={{ marginRight: "10px" }} />
                        Quizy@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
}