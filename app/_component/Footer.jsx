"use client"
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-black p-10 flex justify-center">
            <motion.div
                className="w-full max-w-[80%] bg-gradient-to-br from-[#0C0C0D] to-black rounded-2xl shadow-2xl border border-gray-800 p-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src="/logo.png"
                                alt="PrepGenie Logo"
                                className="w-32 h-16 rounded-xl border border-gray-700 shadow-lg"
                            />
                        </div>
                        <p className="text-gray-400 text-sm">
                            Your AI-Powered Guide to Tech Success
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
                                <MdEmail className="text-2xl text-blue-400" />
                                <a href="mailto:deepaksinghalgpg@gmail.com" className="hover:underline text-sm">
                                    deepaksinghalgpg@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
                                <MdEmail className="text-2xl text-blue-400" />
                                <a href="mailto:harshitbhardwaj99999@gmail.com" className="hover:underline text-sm">
                                    harshitbhardwaj99999@gmail.com
                                </a>
                            </div>
                        </div>
                        <p className="text-green-400 text-sm">● All Systems Operational</p>
                    </motion.div>

                    {/* Middle Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h3 className="font-semibold text-white text-lg">Quick Navigation</h3>
                        <ul className="space-y-3">
                            {["Home", "Interview", "Roadmap", "Techzone"].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="text-gray-400 hover:text-white cursor-pointer text-sm"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                    >
                        <h3 className="font-semibold text-white text-lg">Social Handles</h3>
                        <div className="flex space-x-3">
                            {[FaGithub, FaGithub].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1 }}
                                    className="p-3 rounded-xl text-white bg-gray-800 hover:bg-gray-700 transition-all shadow-md"
                                >
                                    <Icon className="text-xl" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
