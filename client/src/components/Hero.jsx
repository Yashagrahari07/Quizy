import React from 'react';

export default function Hero() {
    return (
        <div className="bg-blue-500 h-screen flex items-center">
            <div className="container mx-auto flex justify-between items-center px-4 py-6">
                <div className="w-1/2">
                    <h1 className="text-6xl font-bold text-white mb-4">Online test and quiz maker</h1>
                    <p className="text-2xl text-white mb-8">Create, send and analyze your tests, quizzes and assessments for free with Quizy</p>
                    <a href="#" className="bg-green-400 hover:bg-green-500 text-white py-4 px-6 rounded-lg text-xl">Get Started for Free &gt;&gt;</a>
                </div>
                <div className="w-1/2">
                    <img src="https://i.ibb.co/9sCCj2b/exam.png" alt="Exam" className="h-80 mx-auto" />
                </div>
            </div>
        </div>
    );
}
