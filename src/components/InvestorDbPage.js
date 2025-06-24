import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { resourcesData } from '../data/resourcesData';
import Icon from './Icon';

const BackButton = () => (
    <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 font-semibold">
        <Icon name="arrow-left" className="w-5 h-5" /> Back to All Resources
    </Link>
);

const InvestorDbPage = () => {
    const ITEMS_PER_PAGE = 9;
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);

    const filteredData = useMemo(() => {
        const lowercasedFilter = searchTerm.toLowerCase();
        return resourcesData.investorDb.filter(item =>
            item.name.toLowerCase().includes(lowercasedFilter) ||
            (item.description && item.description.toLowerCase().includes(lowercasedFilter)) ||
            (item.location && item.location.toLowerCase().includes(lowercasedFilter)) ||
            (item.industries && item.industries.some(ind => ind.toLowerCase().includes(lowercasedFilter)))
        );
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setDisplayedCount(ITEMS_PER_PAGE);
    };

    // --- NEW: Function to clear the search input ---
    const clearSearch = () => {
        setSearchTerm('');
    };

    const itemsToShow = filteredData.slice(0, displayedCount);

    return (
        <div>
            <div className="mb-12">
                <BackButton />
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Investor Database</h1>
            </div>
            <div className="mb-10 p-4 rounded-lg bg-slate-800 border border-slate-700">
                {/* --- UPDATED: Search input with clear icon --- */}
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search by name, industry, location..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full search-input pr-10" // Added pr-10 for padding
                    />
                    {searchTerm && (
                        <button onClick={clearSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                            <Icon name="x" className="w-5 h-5 text-slate-400 hover:text-white" />
                        </button>
                    )}
                </div>
            </div>
            {itemsToShow.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {itemsToShow.map(item => (
                        <div key={item.id} className="resource-card">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                <p className="text-sm text-slate-400">{item.location}</p>
                            </div>
                            <p className="text-slate-300 mb-4 text-sm flex-grow">{item.description}</p>
                            
                            <div className="space-y-3 text-xs border-t border-slate-700 pt-4">
                                <div>
                                    <h4 className="font-bold text-slate-400 mb-1">Industries</h4>
                                    <p className="text-slate-200">{item.industries?.join(', ') || 'N/A'}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-400 mb-1">Investment Types</h4>
                                    <p className="text-slate-200">{item.investment_types?.join(', ') || 'N/A'}</p>
                                </div>
                            </div>

                            <div className="text-center mt-auto pt-6 border-t border-slate-800">
                                <a href={item.website} target="_blank" rel="noopener noreferrer" className="action-button">Visit Site</a>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="mt-2 text-xl font-medium text-white">No investors found</h3>
                </div>
            )}
            {displayedCount < filteredData.length && (
                <div className="text-center mt-12">
                    <button onClick={() => setDisplayedCount(prev => prev + ITEMS_PER_PAGE)} className="action-button">Load More</button>
                </div>
            )}
        </div>
    );
};

export default InvestorDbPage;