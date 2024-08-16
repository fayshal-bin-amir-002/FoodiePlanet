import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {

    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Recipes', path: '/recipes' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
        { name: 'About Us', path: '/about' },
    ]

    return (
        <div>
            <nav className="bg-white border-gray-200 py-4 border-b mb-8 md:mb-10 lg:mb-12">
                <div className="flex flex-wrap items-center justify-between">
                    <Link to={"/"} className="flex items-center w-36 lg:w-40">
                        <img src="./logo.png" alt="logo" />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <div className="flex justify-center items-end gap-4 text-xl">
                            <a href="https://www.facebook.com/foyshal.binamir.3" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="inline" />
                            </a>
                            <a href="https://www.linkedin.com/in/fayshal-bin-amir" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="inline" />
                            </a>
                            <a href="https://github.com/fayshal-bin-amir-002" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="inline" />
                            </a>
                        </div>
                        <button onClick={() => setIsToggleOpen(!isToggleOpen)} 
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none  ms-3"
                            aria-controls="mobile-menu-2" aria-expanded="true">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className={`lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ${isToggleOpen ? 'flex' : 'hidden'}`}>
                            {
                                navLinks.map((nav) => <li key={nav.name} className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-black lg:p-0 lg:hover:text-purple-700 my-0.5 lg:my-0 text-lg font-normal text-center ">
                                    <NavLink
                                        key={nav.name}
                                        to={nav.path}
                                        className={({ isActive }) => isActive ? 'lg:text-purple-700' : ''}>
                                        {nav.name}
                                    </NavLink>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default NavBar;