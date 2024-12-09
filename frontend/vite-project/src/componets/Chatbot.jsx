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
        <div className="fixed bottom-10 right-5 md:bottom-10 md:right-10">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            >
                {isVisible ? "Hide StudyBot" : "Open StudyBot"}
            </button>
            {isVisible && (
                <div className="w-72 h-96 sm:w-80 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden mt-2 flex flex-col">
                    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold">StudyBot</h2>
                        <button onClick={() => setIsVisible(false)} className="text-white">✕</button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`mb-2 p-2 rounded-lg max-w-xs ${message.sender === "user" ? "bg-green-500 text-white self-end" : "bg-gray-700 text-white self-start"}`}>
                                <span className="block text-xs font-semibold mb-1">{message.sender === "user" ? "User" : "StudyBot"}</span>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-700 flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 p-2 bg-gray-800 text-white border border-gray-700 rounded-full mr-2"
                        />
                        <button onClick={handleSendMessage} className="bg-green-500 text-white p-2 rounded-full hover:bg-green-700 transition duration-300">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;