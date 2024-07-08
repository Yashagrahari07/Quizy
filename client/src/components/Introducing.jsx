import React from 'react';
import { AccessTime, Check, FlashOn, Lock, Public, Recommend } from '@mui/icons-material';

export default function Introducing() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-4xl text-center font-bold mb-8">Awesome <span className="text-blue-500">Features</span></h1>
                <div className="flex justify-between">
                    <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center bg-blue-500 text-white rounded-full p-4 mb-4">
                            <Public style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Access anywhere</h2>
                        <p className="text-gray-700">Being online allows you and your respondents to access, administer and take your quizzes from anywhere at anytime.</p>
                    </div>
                    <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full p-4 mb-4">
                            <Lock style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Secured with SSL</h2>
                        <p className="text-gray-700">With SSL encryption and utilizing our advanced cloud infrastructure you can be sure your tests will always be secure.</p>
                    </div>
                    <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center bg-green-500 text-white rounded-full p-4 mb-4">
                            <Check style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Auto-grading</h2>
                        <p className="text-gray-700">Quizy can automatically grade your assessments, saving you the time.</p>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center bg-purple-500 text-white rounded-full p-4 mb-4">
                            <AccessTime style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Timed tests</h2>
                        <p className="text-gray-700">With Quizy it is easy to set a time limit.</p>
                    </div>
                    <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center bg-indigo-500 text-white rounded-full p-4 mb-4">
                            <FlashOn style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Custom Tests</h2>
                        <p className="text-gray-700">With Quizy you can customize your tests easily.</p>
                    </div>
                    <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center bg-red-500 text-white rounded-full p-4 mb-4">
                            <Recommend style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Easy to use</h2>
                        <p className="text-gray-700">We work hard to make sure the user experience is intuitive, making it easy to create, share and take quizzes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
