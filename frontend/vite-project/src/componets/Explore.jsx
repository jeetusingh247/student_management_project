




import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./homepage/Footer";
import Navbar2 from "./Navbar2";

function ExplorePage() {
    const navigate = useNavigate();

    const semesters = [
        { id: 1, name: "Semester 1", contentAvailable: false },
        { id: 2, name: "Semester 2", contentAvailable: false },
        { id: 3, name: "Semester 3", contentAvailable: false },
        { id: 4, name: "Semester 4", contentAvailable: true },
        { id: 5, name: "Semester 5", contentAvailable: false },
        { id: 6, name: "Semester 6", contentAvailable: false },
        { id: 7, name: "Semester 7", contentAvailable: false },
        { id: 8, name: "Semester 8", contentAvailable: false },
    ];

    const handleCardClick = (semester) => {
        if (semester.contentAvailable) {
            navigate(`/explore/semester${semester.id}`);
        } else {
            alert("Content Available Soon");
        }
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
                    Select the semester for which you need to access the curated & structured study material…
                </h4>
            </div>
            <h2 className="text-center text-3xl font-bold my-4">Your Semester</h2>
            <div className="semester-cards grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                {semesters.map((semester) => (
                    <div
                        key={semester.id}
                        className={`semester-card p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white`}
                        onClick={() => handleCardClick(semester)}
                    >
                        <h3 className="text-xl font-semibold mb-2">{semester.name}</h3>
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
                    .semester-card {
                        flex: 1 1 calc(50% - 20px);
                    }
                }
                @media (max-width: 480px) {
                    .semester-card {
                        flex: 1 1 100%;
                    }
                }
            `}</style>
        </div>
    );
}

export default ExplorePage;












                // import React from "react";
                // import { useNavigate } from "react-router-dom";
                // import Footer from "./homepage/Footer";
                // import Navbar2 from "./Navbar2";
                
                // function ExplorePage() {
                //     const navigate = useNavigate();
                
                //     const semesters = [
                //         { id: 1, name: "Semester 1", contentAvailable: false },
                //         { id: 2, name: "Semester 2", contentAvailable: false },
                //         { id: 3, name: "Semester 3", contentAvailable: false },
                //         { id: 4, name: "Semester 4", contentAvailable: true },
                //         { id: 5, name: "Semester 5", contentAvailable: false },
                //         { id: 6, name: "Semester 6", contentAvailable: false },
                //         { id: 7, name: "Semester 7", contentAvailable: false },
                //         { id: 8, name: "Semester 8", contentAvailable: false },
                //     ];
                
                //     const handleCardClick = (semester) => {
                //         if (semester.contentAvailable) {
                //             navigate(`/explore/semester${semester.id}`);
                //         } else {
                //             alert("Content Available Soon");
                //         }
                //     };
                
                //     return (
                //         <div className="flex flex-col min-h-screen">
                //             <Navbar2 />
                //             <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-8">
                //                 <img
                //                     src="/Assets/logo.png"
                //                     alt="Website Logo"
                //                     className="logo mb-4 md:mb-0 md:mr-20 w-24 h-24 md:w-32 md:h-32"
                //                 />
                //                 <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left">
                //                     Select the semester for which you need to access the curated & structured study material…
                //                 </h4>
                //             </div>
                //             <h2 className="text-center text-3xl font-bold my-4">Your Semester</h2>
                //             <div className="semester-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                //                 {semesters.map((semester) => (
                //                     <div
                //                         key={semester.id}
                //                         className={`semester-card p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white`}
                //                         onClick={() => handleCardClick(semester)}
                //                     >
                //                         <h3 className="text-xl font-semibold mb-2">{semester.name}</h3>
                //                     </div>
                //                 ))}
                //             </div>
                //             <Footer />
                //             <style jsx>{`
                //                 .logo-header {
                //                     padding: 20px;
                //                     text-align: center;
                //                 }
                //                 @media (max-width: 768px) {
                //                     .semester-card {
                //                         flex: 1 1 calc(50% - 40px);
                //                     }
                //                 }
                //                 @media (max-width: 480px) {
                //                     .semester-card {
                //                         flex: 1 1 100%;
                //                     }
                //                 }
                //             `}</style>
                //         </div>
                //     );
                // }
                
                // export default ExplorePage;
                
                // import React from "react";
                // import { useNavigate } from "react-router-dom";
                // import Footer from "./homepage/Footer";
                // import Navbar2 from "./Navbar2";
                
                // function ExplorePage() {
                //     const navigate = useNavigate();
                
                //     const semesters = [
                //         { id: 1, name: "Semester 1", contentAvailable: false },
                //         { id: 2, name: "Semester 2", contentAvailable: false },
                //         { id: 3, name: "Semester 3", contentAvailable: false },
                //         { id: 4, name: "Semester 4", contentAvailable: true },
                //         { id: 5, name: "Semester 5", contentAvailable: false },
                //         { id: 6, name: "Semester 6", contentAvailable: false },
                //         { id: 7, name: "Semester 7", contentAvailable: false },
                //         { id: 8, name: "Semester 8", contentAvailable: false },
                //     ];
                
                //     const handleCardClick = (semester) => {
                //         if (semester.contentAvailable) {
                //             navigate(`/explore/semester${semester.id}`);
                //         } else {
                //             alert("Content Available Soon");
                //         }
                //     };
                
                //     return (
                //         <div className="flex flex-col min-h-screen">
                //             <Navbar2 />
                //             <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-8">
                //                 <img
                //                     src="/Assets/logo.png"
                //                     alt="Website Logo"
                //                     className="logo mb-4 md:mb-0 md:mr-20 w-24 h-24 md:w-32 md:h-32"
                //                 />
                //                 <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left">
                //                     Select the semester for which you need to access the curated & structured study material…
                //                 </h4>
                //             </div>
                //             <h2 className="text-center text-3xl font-bold my-4">Your Semester</h2>
                //             <div className="semester-cards grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                //                 {semesters.map((semester) => (
                //                     <div
                //                         key={semester.id}
                //                         className={`semester-card p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white`}
                //                         onClick={() => handleCardClick(semester)}
                //                     >
                //                         <h3 className="text-xl font-semibold mb-2">{semester.name}</h3>
                //                     </div>
                //                 ))}
                //             </div>
                //             <Footer />
                //             <style jsx>{`
                //                 .logo-header {
                //                     padding: 20px;
                //                     text-align: center;
                //                 }
                //                 @media (max-width: 768px) {
                //                     .semester-card {
                //                         flex: 1 1 calc(50% - 20px);
                //                     }
                //                 }
                //                 @media (max-width: 480px) {
                //                     .semester-card {
                //                         flex: 1 1 100%;
                //                     }
                //                 }
                //             `}</style>
                //         </div>
                //     );
                // }
                
                // export default ExplorePage;
                
                // import React from "react";
                // import { useNavigate } from "react-router-dom";
                // import Footer from "./homepage/Footer";
                // import Navbar2 from "./Navbar2";
                
                // function ExplorePage() {
                //     const navigate = useNavigate();
                
                //     const semesters = [
                //         { id: 1, name: "Semester 1", contentAvailable: false },
                //         { id: 2, name: "Semester 2", contentAvailable: false },
                //         { id: 3, name: "Semester 3", contentAvailable: false },
                //         { id: 4, name: "Semester 4", contentAvailable: true },
                //         { id: 5, name: "Semester 5", contentAvailable: false },
                //         { id: 6, name: "Semester 6", contentAvailable: false },
                //         { id: 7, name: "Semester 7", contentAvailable: false },
                //         { id: 8, name: "Semester 8", contentAvailable: false },
                //     ];
                
                //     const handleCardClick = (semester) => {
                //         if (semester.contentAvailable) {
                //             navigate(`/explore/semester${semester.id}`);
                //         } else {
                //             alert("Content Available Soon");
                //         }
                //     };
                
                //     return (
                //         <div className="flex flex-col min-h-screen">
                //             <Navbar2 />
                //             <div className="logo-header flex flex-col md:flex-row items-center justify-center mt-16 mb-8">
                //                 <img
                //                     src="/Assets/logo.png"
                //                     alt="Website Logo"
                //                     className="logo mb-4 md:mb-0 md:mr-20 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
                //                 />
                //                 <h4 className="text-lg md:text-2xl font-semibold text-center md:text-left md:ml-8">
                //                     Select the semester for which you need to access the curated & structured study material…
                //                 </h4>
                //             </div>
                //             <h2 className="text-center text-3xl font-bold my-4">Your Semester</h2>
                //             <div className="semester-cards grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                //                 {semesters.map((semester) => (
                //                     <div
                //                         key={semester.id}
                //                         className={`semester-card p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white`}
                //                         onClick={() => handleCardClick(semester)}
                //                     >
                //                         <h3 className="text-xl font-semibold mb-2">{semester.name}</h3>
                //                     </div>
                //                 ))}
                //             </div>
                //             <Footer />
                //             <style jsx>{`
                //                 .logo-header {
                //                     padding: 20px;
                //                     text-align: center;
                //                 }
                //                 @media (max-width: 768px) {
                //                     .semester-card {
                //                         flex: 1 1 calc(50% - 20px);
                //                     }
                //                 }
                //                 @media (max-width: 480px) {
                //                     .semester-card {
                //                         flex: 1 1 100%;
                //                     }
                //                 }
                //             `}</style>
                //         </div>
                //     );
                // }
                
                // export default ExplorePage;