import React, { useEffect, useState } from 'react';

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems = (
        <>
            <li>
                <a href="#hero-section" className="relative font-bold text-[17px] text-[rgb(27,33,36)] leading-[22px] hover:text-blue-500 transition-colors duration-300 group">
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li>
                <a href="#offering-section" className="relative font-bold text-[17px] text-[rgb(27,33,36)] leading-[22px] hover:text-blue-500 transition-colors duration-300 group">
                    Offering
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li>
                <a href="#profile-section" className="relative font-bold text-[17px] text-[rgb(27,33,36)] leading-[22px] hover:text-blue-500 transition-colors duration-300 group">
                    Team
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li>
                <a href="#explore" className="relative font-bold text-[17px] text-[rgb(27,33,36)] leading-[22px] hover:text-blue-500 transition-colors duration-300 group">
                    Explore
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li>
                <a href="#contact" className="relative font-bold text-[17px] text-[rgb(27,33,36)] leading-[22px] hover:text-blue-500 transition-colors duration-300 group">
                    Contact
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
        </>
    );

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 w-full border-2 ${sticky ? 'shadow-md bg-gray-200' : 'bg-transparent'} transition-all duration-300`}>
            <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                <a href="/" className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold ml-4">
                    STRUCT&#123;STUDY&#125;;
                </a>

                <div className="hidden lg:flex space-x-4 mr-4">
                    <ul className="flex space-x-6">
                        {navItems}
                    </ul>
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="lg:hidden bg-gray-200 shadow-md">
                    <ul className="p-4 space-y-2">
                        {navItems}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
