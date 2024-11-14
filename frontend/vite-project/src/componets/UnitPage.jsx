import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar2 from "./Navbar2";
import Footer from "./homepage/Footer";

function UnitsPage() {
    const navigate = useNavigate();

    const units = [
        { id: 1, name: "Unit 1" },
        { id: 2, name: "Unit 2" },
        { id: 3, name: "Unit 3" },
        { id: 4, name: "Unit 4" },
        { id: 5, name: "Unit 5" },
    ];

    const handleUnitClick = (unit) => {
        navigate(`/explore/semester4/subject1/unit/${unit.id}`);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar2 />
            <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-8">
                <img
                    src="/Assets/logo.png"
                    alt="Website Logo"
                    className="logo mb-4 md:mb-0 md:mr-4 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
                />
                <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left md:ml-8">
                    Select the unit for which you need to access the curated & structured study material…
                </h4>
            </div>
            <h2 className="text-center text-3xl font-bold my-4">Subject 1 - Units</h2>
            <div className="unit-cards grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                {units.map((unit) => (
                    <div
                        key={unit.id}
                        className={`unit-card p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white`}
                        onClick={() => handleUnitClick(unit)}
                    >
                        <h3 className="text-xl font-semibold mb-2">{unit.name}</h3>
                    </div>
                ))}
            </div>
            <Footer />
            <style jsx>{`
                .logo-header {
                    padding: 20px;
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .unit-card {
                        flex: 1 1 calc(50% - 20px);
                    }
                }
                @media (max-width: 480px) {
                    .unit-card {
                        flex: 1 1 100%;
                    }
                }
            `}</style>
        </div>
    );
}

export default UnitsPage;