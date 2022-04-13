import React, {useContext, useState} from 'react';

import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import {LanguageContext} from "./context/LanguageContext";
const Header = () => {
    const [searchTitle,setSearchTitle] = useState( "")
    const {language,satLanguage} = useContext(LanguageContext)

    const handleChange = (e)=> {
        setSearchTitle(e.target.value)
    }

    const navigate = useNavigate()
    const handleSearch = ()=> {
        navigate(`/movies/search-results/${searchTitle}`)
    }


    return (
        <nav className="bg-gray-900 border-white-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto mr-5">
                <NavLink to="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                    <span className="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-amber-50">Cinema</span>
                </NavLink>
                <div className=" md:order-2">
                    <div className=" relative mr-3 md:mr-0 flex items-center justify-center">
                        {/*<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">*/}
                        {/*    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd"*/}
                        {/*              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"*/}
                        {/*              clip-rule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</div>*/}

                        <input type="text" id="email-adress-icon"
                               onChange= {handleChange}
                               className="block p-1.5   text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search..."/>
                        <button type="button"
                                onClick={handleSearch}
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 p-1.5 text-center mr-2 mb-2 m-2 ">Search
                        </button>
                    </div>
                    <button data-collapse-toggle="mobile-menu-3" type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-3" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                     id="mobile-menu-3">
                    <ul className="flex flex-col mt-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <NavLink to="/"
                                     className="block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 text-white"
                                     aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/popular"
                               className="block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 text-white"
                               aria-current="page">Popular</NavLink>
                        </li>
                        <li>
                            <NavLink to="/top-rated"
                                     className="block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 text-white">Top rated</NavLink>
                        </li>
                        <li>
                            <NavLink to="/now-playing"
                                     className="block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 text-white">
                                Now playing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upcoming"
                                     className="block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 text-white">
                                Upcoming</NavLink>
                        </li>
                        <li>
                            <NavLink to="/latest"
                                     className="block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 text-white">
                                Latest</NavLink>
                        </li>
                    </ul>
                    {/*<select name="" id="" onChange={handleChange} className="ml-3">*/}
                    {/*    <option value="ru-RUS" selected>Русский</option>*/}
                    {/*    <option value="en-US">English</option>*/}
                    {/*</select>*/}
                    <div className='ml-6'>
                        <button
                            onClick={()=>satLanguage("en-RUS")}
                        className="text-white">русский</button>
                        <button className="text-white mx-2">english</button>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
