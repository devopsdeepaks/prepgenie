import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-black p-10 flex justify-center">
            <motion.div
                className="w-full max-w-[80%] bg-gradient-to-br from-[#0C0C0D] to-black rounded-2xl shadow-2xl border border-gray-800 p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src="/logo.png"
                                alt="Suprema Logo"
                                className="w-12 h-12 rounded-xl border border-gray-700 shadow-lg"
                            />
                            <h2 className="text-2xl font-semibold">
                                Suprema <span className="text-gray-400 text-sm">UI</span>
                            </h2>
                        </div>
                        <p className="mt-3 text-gray-400 text-sm">Plan and navigate from idea to launch.</p>
                        <div className="mt-4 flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
                            <MdEmail className="text-2xl text-blue-400" />
                            <a href="mailto:hello@suprema.com" className="hover:underline text-sm">
                                hello@suprema.com
                            </a>
                        </div>
                        <p className="mt-4 text-green-400 text-sm">● All Systems Operational</p>
                    </motion.div>

                    {/* Middle Sections */}
                    <motion.div
                        className="grid grid-cols-2 gap-8 flex-[2]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white text-lg">Quick Navigation</h3>
                            <ul className="space-y-3">
                                {["Product Overview", "Features", "Pricing", "Testimonials", "FAQ's"].map(
                                    (item, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-400 hover:text-white cursor-pointer text-sm"
                                        >
                                            {item}
                                        </motion.li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-white text-lg">All Pages</h3>
                            <ul className="space-y-3">
                                {["Home", "Waitlist", "Contact", "Blogs", "Changelog", "Privacy Policy", "404"].map(
                                    (item, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-400 hover:text-white cursor-pointer text-sm"
                                        >
                                            {item}
                                        </motion.li>
                                    )
                                )}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white text-lg">Social Handles</h3>
                            <div className="flex space-x-3">
                                {[FaLinkedin, FaXTwitter, FaInstagram].map((Icon, index) => (
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
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;