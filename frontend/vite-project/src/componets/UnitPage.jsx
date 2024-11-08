// UnitsPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

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
        <div className="units-page">
            <h2>Subject 1 - Units</h2>
            <div className="unit-cards">
                {units.map((unit) => (
                    <div
                        key={unit.id}
                        className="unit-card"
                        onClick={() => handleUnitClick(unit)}
                    >
                        {unit.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UnitsPage;
