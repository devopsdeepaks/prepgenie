import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section - Logo & About */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            <h2 className="text-xl font-semibold">Suprema UI</h2>
          </div>
          <p className="text-gray-400 mt-3">
            Plan and navigate from idea to launch.
          </p>
          <div className="flex items-center space-x-2 mt-4 text-gray-300">
            <span className="text-xl">📧</span>
            <a href="mailto:hello@suprema.com" className="hover:text-white">
              hello@suprema.com
            </a>
          </div>
          <div className="flex items-center space-x-2 mt-2 text-green-400">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <p>All Systems Operational</p>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Navigation</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Product Overview</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Middle Section - All Pages */}
        <div>
          <h3 className="text-white font-semibold mb-4">All Pages</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Waitlist</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer">Changelog</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">404</li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Handles</h3>
          <div className="flex space-x-3">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <FaLinkedin className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <FaXTwitter className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
