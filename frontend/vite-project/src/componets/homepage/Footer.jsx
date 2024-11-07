import React from "react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-100 py-10 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Connect with Us
            </h2>
            
            <p className="text-gray-700 italic text-lg mb-6 max-w-md">
                Let’s work together to build a brighter future. We’re here to support, guide, and collaborate with you.
            </p>

            <div className="flex space-x-6 mb-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Assets/github_logo.png"
                        alt="GitHub"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Assets/instagram_logo.png"
                        alt="Instagram"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Assets/linkedin_logo.png"
                        alt="LinkedIn"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="mailto:support@example.com">
                    <img
                        src="/Assets/gmail_logo.png"
                        alt="Gmail"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/Assets/telegram_logo.png"
                        alt="Telegram"
                        className="w-10 h-10 hover:scale-110 transition-transform"
                    />
                </a>
            </div>

            <p className="text-gray-600 italic text-base max-w-lg">
                Wishing you the best of luck on your journey! Keep learning, keep growing, and remember, we’re here whenever you need support.
            </p>
        </footer>
    );
};

export default Footer;
