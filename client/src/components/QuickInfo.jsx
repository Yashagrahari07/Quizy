import React from 'react';
import { AccessTime, Description, FormatListBulleted, People } from '@mui/icons-material';

export default function QuickInfo() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-12">
                <div className="flex justify-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose <span className="text-blue-500">Quizy?</span></h2>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/4 p-6 bg-white rounded-lg shadow-lg text-center">
                        <div className="flex items-center justify-center bg-blue-500 text-white rounded-full p-4 mb-4">
                            <AccessTime style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Time Saving</h2>
                        <p className="text-gray-700">Create and grade quizzes quickly.</p>
                    </div>
                    <div className="w-1/4 p-6 bg-white rounded-lg shadow-lg text-center">
                        <div className="flex items-center justify-center bg-green-500 text-white rounded-full p-4 mb-4">
                            <People style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Audience Engagement</h2>
                        <p className="text-gray-700">Engage your audience with interactive quizzes.</p>
                    </div>
                    <div className="w-1/4 p-6 bg-white rounded-lg shadow-lg text-center">
                        <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full p-4 mb-4">
                            <FormatListBulleted style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Easy Assessment</h2>
                        <p className="text-gray-700">Effortlessly assess knowledge and skills.</p>
                    </div>
                    <div className="w-1/4 p-6 bg-white rounded-lg shadow-lg text-center">
                        <div className="flex items-center justify-center bg-purple-500 text-white rounded-full p-4 mb-4">
                            <Description style={{ fontSize: "3rem" }} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Customizable</h2>
                        <p className="text-gray-700">Tailor quizzes to your specific needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
