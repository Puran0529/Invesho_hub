import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Icon from './Icon';

const HubView = () => {
    const hubItems = [
        { target: '/accelerators', icon: 'zap', title: 'Accelerators & Grants', description: "Find top-tier accelerator programs and grant opportunities to fuel your startup's journey." },
        { target: '/pitch_decks', icon: 'layout', title: 'Pitch Deck Templates', description: 'Craft the perfect pitch with our collection of proven templates from successful startups.' },
        { target: '/legal_docs', icon: 'shield', title: 'Legal Document Templates', description: 'Essential legal templates for founders, from incorporation documents to advisor agreements.' },
        { target: '/investor_db', icon: 'database', title: 'Investor Database', description: 'Access a curated list of active angel investors and VCs tailored to your industry and stage.' }
    ];

    return (
        <div>
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Founder Resource Hub</h1>
                <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">An actionable collection of guides, tools, and platforms to help you build, fund, and scale your startup.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {hubItems.map(item => (
                    // Each card is now a Link
                    <Link to={item.target} key={item.target} className="hub-card">
                        <div className="icon-wrapper">
                            <Icon name={item.icon} size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm flex-grow">{item.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HubView;