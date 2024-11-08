import React from 'react';
import { useHistory } from 'react-router-dom';
// import './PageNavigatorButton.css'; // Assuming you have some CSS for styling

const PageNavigatorButton = () => {
    const history = useHistory();

    const handleNextPage = () => {
        history.push('/next-page'); // Replace with your next page route
    };

    const handlePreviousPage = () => {
        history.push('/previous-page'); // Replace with your previous page route
    };

    return (
        <div className="page-navigator">
            <button
                className="nav-button left"
                onClick={handlePreviousPage}
                style={{
                    backgroundColor: '#4CAF50', // Green background
                    color: 'white', // White text
                    padding: '15px 32px', // Padding
                    textAlign: 'center', // Centered text
                    textDecoration: 'none', // No underline
                    display: 'inline-block', // Inline-block display
                    fontSize: '16px', // Font size
                    margin: '4px 2px', // Margin
                    cursor: 'pointer', // Pointer cursor
                    border: 'none', // No border
                    borderRadius: '4px' // Rounded corners
                }}
            >
                &#8592; {/* Left arrow */}
            </button>
            <button
                className="nav-button right"
                onClick={handleNextPage}
                style={{
                    backgroundColor: '#4CAF50', // Green background
                    color: 'white', // White text
                    padding: '15px 32px', // Padding
                    textAlign: 'center', // Centered text
                    textDecoration: 'none', // No underline
                    display: 'inline-block', // Inline-block display
                    fontSize: '16px', // Font size
                    margin: '4px 2px', // Margin
                    cursor: 'pointer', // Pointer cursor
                    border: 'none', // No border
                    borderRadius: '4px' // Rounded corners
                }}
            >
                &#8594; {/* Right arrow */}
            </button>
        </div>
    );
};

export default PageNavigatorButton;