import { useState } from "react";
import { motion } from "framer-motion";

export default function TweetPopup({ isOpen, onClose, onSubmit }) {
    const [username, setUsername] = useState("");
    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !heading || !description) return; // Prevent empty submissions
        onSubmit({ user: username, handle: `@${username.toLowerCase()}`, content: `${heading}: ${description}` });
        onClose(); // Close popup after submitting
        setUsername("");
        setHeading("");
        setDescription("");
    };

    if (!isOpen) return null; // Hide the popup when not needed

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-white mb-4">Add a Tweet</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-2 bg-gray-800 text-white rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Tweet Heading"
                        className="w-full p-2 bg-gray-800 text-white rounded"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                    />
                    <textarea
                        placeholder="Tweet Description"
                        className="w-full p-2 bg-gray-800 text-white rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="bg-red-500 px-4 py-2 rounded">Cancel</button>
                        <button type="submit" className="bg-blue-600 px-4 py-2 rounded">Tweet</button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}



