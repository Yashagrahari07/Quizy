import React from 'react';

export default function FeaturesItem({item}) {
    return (
        <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
            <div className={`flex items-center justify-center bg-${item.color}-500 text-white rounded-full p-4 mb-4`}>
                {item.icon}
            </div>
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
        </div>
    );
}