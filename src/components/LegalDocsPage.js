import React from 'react';
import { Link } from 'react-router-dom';
import { resourcesData } from '../data/resourcesData';
import Icon from './Icon';

const BackButton = () => (
    <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 font-semibold">
        <Icon name="arrow-left" className="w-5 h-5" /> Back to All Resources
    </Link>
);

// Note: The 'scriptsReady' prop is removed as we no longer need jsPDF here.
const LegalDocsPage = () => {

    const categorizedDocs = resourcesData.legalDocs.reduce((acc, doc) => {
        (acc[doc.category] = acc[doc.category] || []).push(doc);
        return acc;
    }, {});

    return (
        <div>
            <div className="mb-12">
                <BackButton />
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Legal Document Templates</h1>
            </div>
            <div className="space-y-12">
                {Object.entries(categorizedDocs).map(([category, docs]) => (
                    <div key={category}>
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">{category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {docs.map(item => (
                                <div key={item.id} className="resource-card">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="icon-wrapper w-12 h-12">
                                            <Icon name="file-text" size={28}/>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                    </div>
                                    <p className="text-slate-400 mb-2 text-sm">{item.description}</p>
                                    <p className="text-xs text-slate-500 mb-5 flex-grow italic">When to use: {item.whenToUse}</p>
                                    <div className="text-center mt-auto pt-6 border-t border-slate-800">
                                        {/* FIX: This is now a simple link that points to your file and includes the 'download' attribute */}
                                        <a href={item.link} download className="action-button">
                                            Download
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LegalDocsPage;