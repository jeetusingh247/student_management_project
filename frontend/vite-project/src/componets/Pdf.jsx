import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { saveAs } from "file-saver";

const Pdf = ({ pdfUrl }) => {
    const handleDownload = () => {
        saveAs(pdfUrl, pdfUrl.split('/').pop()); // Use the filename from the URL
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                <div className="p-4 bg-blue-500 text-white text-center font-bold text-2xl">
                    PDF Viewer
                </div>
                <div className="p-6">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.min.js">
                        <Viewer fileUrl={pdfUrl} />
                    </Worker>
                </div>
                <div className="flex justify-center p-4 bg-gray-100">
                    <button
                        onClick={handleDownload}
                        className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
                    >
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pdf;
