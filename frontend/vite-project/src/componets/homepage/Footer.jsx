import React from "react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-100 py-10 flex flex-col items-center text-center">
            <h1 className="text-3xl font-semibold text-blue-600 mb-4">
                Connect with Us
            </h1>
            <br />
            
            <p className="text-gray-700 italic text-lg mb-6 max-w-md">
                Let’s work together to build a brighter future. We’re here to support, guide, and collaborate with you.
            </p>
            <br />

            <div className="flex space-x-10 mb-6">
                <a href="https://github.com/jeetusingh247" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Assets/github_logo.png"
                        alt="GitHub"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://www.instagram.com/itz__saumya__sharma278/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Assets/instagram_logo.png"
                        alt="Instagram"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://www.linkedin.com/in/shiv-sablok-28a09324a/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Assets/linkedin_logo.png"
                        alt="LinkedIn"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=princesingh203188@gmail.com">
                    <img
                        src="/Assets/gmail_logo.png"
                        alt="Gmail"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://t.me/shivsablok27" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Assets/telegram_logo.png"
                        alt="Telegram"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
            </div>
            <br />
            <p className="text-gray-600 italic text-base max-w-lg">
                Wishing you the best of luck on your journey! Keep learning, keep growing, and remember, we’re here whenever you need support.
            </p>
            <br />
            <br />
            <div className="bg-gray-200 text-gray-800 font-semibold text-center w-full py-2">
                &copy; {new Date().getFullYear()} Struct Studies. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
