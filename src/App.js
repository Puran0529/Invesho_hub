import React, { useState, useEffect } from 'react';
// Step 3.1: Import routing components
import { Routes, Route } from 'react-router-dom';

import './App.css'; 
import Header from './components/Header';
import Footer from './components/Footer';
import HubView from './components/HubView';
import AcceleratorsPage from './components/AcceleratorsPage';
import PitchDecksPage from './components/PitchDecksPage';
import LegalDocsPage from './components/LegalDocsPage';
import InvestorDbPage from './components/InvestorDbPage';

export default function App() {
    // We no longer need the 'currentPage' state or the 'navigateTo' function.
    // React Router handles this now.

    const [scriptsReady, setScriptsReady] = useState(false);

    useEffect(() => {
        // This script-loading logic remains the same.
        document.body.style.backgroundColor = '#0F172A';
        const scripts = [
        { id: 'jspdf-script', src: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js' }
    ];

        let loadedCount = 0;
        const handleLoad = () => {
            loadedCount++;
            if (loadedCount === scripts.length) {
                setScriptsReady(true);
            }
        };

        scripts.forEach(({ id, src }) => {
            if (!document.getElementById(id)) {
                const script = document.createElement('script');
                script.id = id;
                script.src = src;
                script.async = true;
                script.onload = handleLoad;
                document.body.appendChild(script);
            } else {
                handleLoad();
            }
        });

        return () => { document.body.style.backgroundColor = ''; };
    }, []);

    useEffect(() => {
        if (scriptsReady && window.feather) {
            window.feather.replace();
        }
    }, [scriptsReady]); // currentPage dependency is removed

    return (
        <div className="antialiased bg-slate-950 text-slate-200">
            {/* The Header no longer needs the onNavigate prop */}
            <Header /> 
            <main className="container mx-auto px-6 pt-24 pb-16">
                {/* Step 3.2: Define the routes */}
                <Routes>
                    <Route index element={<HubView />} />
                    <Route path="/accelerators" element={<AcceleratorsPage />} />
                    <Route path="/pitch_decks" element={<PitchDecksPage />} />
                    <Route path="/legal_docs" element={<LegalDocsPage scriptsReady={scriptsReady} />} />
                    <Route path="/investor_db" element={<InvestorDbPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}