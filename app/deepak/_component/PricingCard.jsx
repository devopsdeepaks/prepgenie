import { motion } from "framer-motion";

const Pricing = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-700 p-6">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Free Plan */}
                <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-600 p-8 rounded-2xl shadow-xl text-white text-center border border-gray-700 flex flex-col items-center"
                    whileHover={{ scale: 1.03 }}
                >
                    <h2 className="text-2xl font-bold">Free Plan</h2>
                    <p className="text-4xl font-extrabold mt-3">$0</p>
                    <p className="text-gray-300">Free for everyone</p>
                    <ul className="mt-6 space-y-3 text-gray-200 text-lg">
                        <li>✔ Task Management</li>
                        <li>✔ Data Encryption</li>
                        <li>✔ Deadline Alerts</li>
                        <li className="opacity-50">✖ Collaboration Tools</li>
                    </ul>
                    <motion.button
                        className="mt-6 bg-white text-gray-800 font-semibold py-2 px-6 rounded-xl hover:bg-gray-300 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Get Started
                    </motion.button>
                </motion.div>

                {/* Pro Plan */}
                <motion.div
                    className="bg-gradient-to-br from-purple-700 to-purple-500 p-8 rounded-2xl shadow-xl text-white text-center border border-purple-400 flex flex-col items-center"
                    whileHover={{ scale: 1.03 }}
                >
                    <h2 className="text-2xl font-bold">Pro Plan</h2>
                    <p className="text-4xl font-extrabold mt-3">$9.99</p>
                    <p className="text-gray-200">Advanced features for professionals</p>
                    <ul className="mt-6 space-y-3 text-lg">
                        <li>✔ Task Management</li>
                        <li>✔ Data Encryption</li>
                        <li>✔ Deadline Alerts</li>
                        <li>✔ Collaboration Tools</li>
                        <li>✔ Priority Support</li>
                    </ul>
                    <motion.button
                        className="mt-6 bg-white text-purple-700 font-semibold py-2 px-6 rounded-xl hover:bg-gray-200 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Upgrade Now
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;
