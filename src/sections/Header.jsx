import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title, to, onClick, isMobile = false }) => (
    <LinkScroll
        to={to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={`cursor-pointer hover:text-green-primary transition-smooth ${
            isMobile ? "text-3xl font-medium" : ""
        }`}
        onClick={onClick}
    >
        {title}
    </LinkScroll>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navItems = [
        { title: "Home", to: "hero" },
        { title: "Tour", to: "tour" },
        { title: "About Us", to: "about" },
        { title: "Contact Us", to: "contact" },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full py-2 lg:py-8 lg:px-6">
            <div className="container m-auto flex h-14 items-center justify-between max-lg:px-5">
                {/* Desktop Navigation */}
                <nav className="hidden lg:block w-full">
                    <ul className="flex items-center justify-between ">
                        <li className="nav-logo">
                            <LinkScroll
                                to="hero"
                                offset={-100}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                            >
                                <img
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={120}
                                    height={55}
                                    className="object-contain"
                                />
                            </LinkScroll>
                        </li>
                        <li className="nav-li flex items-center gap-10 bg-white py-4 px-8 border-radius-lg">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    title={item.title}
                                    to={item.to}
                                />
                            ))}
                        </li>
                        <li className="nav-icon flex items-center gap-4 ">
                            <button className=" bg-white rounded-[74px] flex justify-center items-center p-4 hover:opacity-80 transition-smooth">
                                <img
                                    src="/images/travel.png"
                                    alt="travel"
                                    className="size-4 object-contain"
                                />
                            </button>
                            <button className=" bg-white rounded-[74px] flex justify-center items-center p-4 hover:opacity-80 transition-smooth">
                                <img
                                    src="/images/search.png"
                                    alt="Search"
                                    className="size-4 object-contain"
                                />
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Overlay - Full Height */}
                <div
                    className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-green-primary transition-all duration-500 ease-in-out ${
                        isOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible pointer-events-none"
                    }`}
                >
                    {/* Header Section in Overlay */}
                    <div className="flex items-center justify-between px-8 py-10">
                        <LinkScroll
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="cursor-pointer"
                            onClick={closeMenu}
                        >
                            <img
                                src="/images/logo.png"
                                alt="logo"
                                width={120}
                                height={40}
                                // filter the logo to be white
                                className="filter brightness-0 invert"
                            />
                        </LinkScroll>

                        <button
                            className="w-10 h-10 flex items-center justify-center z-50 bg-white rounded-full p-2"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <img
                                src="/images/close.svg"
                                alt="Close menu"
                                width={28}
                                height={28}
                            />
                        </button>
                    </div>

                    {/* Navigation Links - Centered */}
                    <nav className="flex flex-col items-center justify-center h-[calc(100vh-184px)]">
                        <ul className="flex flex-col items-center gap-8">
                            {navItems.map((item) => (
                                <li
                                    key={item.to}
                                    className="text-center text-white"
                                >
                                    <NavLink
                                        title={item.title}
                                        to={item.to}
                                        onClick={closeMenu}
                                        isMobile={true}
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Icons at Bottom */}
                    <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-8">
                        <button className="bg-white rounded-full flex justify-center items-center p-4 shadow-md hover:opacity-80 transition-smooth">
                            <img
                                src="/images/travel.png"
                                alt="Travel"
                                className="size-5 object-contain"
                            />
                        </button>
                        <button className="bg-white rounded-full flex justify-center items-center p-4 shadow-md hover:opacity-80 transition-smooth">
                            <img
                                src="/images/search.png"
                                alt="Search"
                                className="size-5 object-contain"
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Header - Visible when menu closed */}
                <div
                    className={`lg:hidden flex items-center justify-between w-full transition-opacity duration-300 px-2 py-4 ${
                        isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                >
                    <LinkScroll
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="cursor-pointer"
                        onClick={closeMenu}
                    >
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            width={120}
                            height={40}
                        />
                    </LinkScroll>

                    <button
                        className="w-10 h-10 flex items-center justify-center"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <img
                            src="/images/menu.svg"
                            alt="Open menu"
                            width={28}
                            height={28}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
