import React from 'react';
import { Link } from 'react-router-dom';
import { resourcesData } from '../data/resourcesData';
import Icon from './Icon';

const BackButton = () => (
    <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 font-semibold">
        <Icon name="arrow-left" className="w-5 h-5" /> Back to All Resources
    </Link>
);

const PitchDecksPage = () => (
    <div>
        <div className="mb-12">
            <BackButton />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Pitch Deck Templates</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesData.pitchDecks.map(item => (
                <div key={item.id} className="resource-card">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                        <p className="text-sm text-slate-400">{item.source}</p>
                    </div>
                    <p className="text-slate-400 mb-5 flex-grow text-sm">{item.description}</p>
                    <div className="text-center mt-auto pt-6 border-t border-slate-800">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="action-button">View Template</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default PitchDecksPage;