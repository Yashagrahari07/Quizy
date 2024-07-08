import React from 'react';
import FeaturesItem from './FeaturesItem';
import { features } from '../app/Data.js';

export default function Features() {
    return (
        <div className="container mx-auto flex justify-between px-4 py-6">
            {features.map((item) => (
                <FeaturesItem item={item} key={item.id} />
            ))}
        </div>
    );
}