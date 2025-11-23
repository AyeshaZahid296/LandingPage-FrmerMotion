import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { type: "spring", duration: 0.8, bounce: 0 },
                opacity: { duration: 0.01 },
            },
        },
    };

    const NavLink = ({ children, to }) => (
        <motion.div
            className="relative font-medium text-[#212121] flex flex-col items-start"
            initial="hidden"
            whileHover="visible"
        >
            <Link to={to}>{children}</Link>
            <motion.svg
                width="100%"
                height="4"
                viewBox="0 0 100 4"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 hidden md:block"
            >
                <motion.line
                    x1="0"
                    y1="2"
                    x2="100"
                    y2="2"
                    stroke="#000000"
                    strokeWidth="1"
                    variants={draw}
                />
            </motion.svg>
        </motion.div>
    );

    return (
        <nav className="w-full bg-white gap-x-6 gap-y-6 top-0 left-0 z-50">
            <div className="px-10 sm:px-10 lg:px-16 flex items-center justify-between h-16">
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="logo"
                    className="w-40 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#">Over ons</NavLink>
                    <NavLink to="#">Vergelijkingen</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <HiX className="w-7 h-7" />
                        ) : (
                            <HiMenu className="w-7 h-7" />
                        )}
                    </button>
                </div>
            </div>

            {/* ✅ Fixed Mobile Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed top-16 left-0 w-full bg-white text-[#212121] shadow-md 
                               px-6 py-6 text-[1.125rem] font-normal leading-6 
                               tracking-[0em] space-y-6 md:hidden z-50"
                >
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#">Over ons</NavLink>
                    <NavLink to="#">Vergelijkingen</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
