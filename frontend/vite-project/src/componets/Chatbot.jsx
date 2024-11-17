// src/components/Chatbot.jsx
import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const handleSendMessage = async () => {
        const newMessage = { text: input, sender: "user" };
        setMessages([...messages, newMessage]);

        try {
            const response = await axios.post("http://localhost:5000/api/chatbot", { message: input });
            const botMessage = { text: response.data.reply, sender: "bot" };
            setMessages([...messages, newMessage, botMessage]);
        } catch (error) {
            console.error("Error sending message to chatbot:", error);
        }

        setInput("");
    };

    return (
        <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-blue-500 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
                {isVisible ? "Hide StudyBot" : "Open StudyBot"}
            </button>
            {isVisible && (
                <div className="w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden mt-2">
                    <div className="p-4 h-4/5 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`mb-2 p-2 rounded-lg ${message.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}`}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-300 flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
                        />
                        <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;