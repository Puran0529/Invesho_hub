import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

// No longer needs onNavigate prop
const Header = () => (
    <header className="fixed top-0 w-full z-50 bg-slate-950 border-b border-slate-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* The 'a' tag is replaced with a 'Link' component */}
            <Link to="/" className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3.004 6.076A.75.75 0 002.25 6.75v10.5a.75.75 0 00.754.674l8.618 4.476a.75.75 0 00.756 0l8.618-4.476A.75.75 0 0021.75 17.25V6.75a.75.75 0 00-.754-.674L12.378 1.602zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                </svg>
                <span className="text-2xl font-bold text-white">Invesho</span>
            </Link>
        </nav>
    </header>
);

export default Header;