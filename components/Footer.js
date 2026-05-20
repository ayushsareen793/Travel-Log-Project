import React from 'react'

const Footer = () => {
    return (
        <footer className=" border-t border-gray-200 bottom-0 text-center left-0 w-full p-4 bg-neutral-primary-soft md:flex md:items-center md:justify-between md:p-6">
            <span className="font-bold text-center text-shadow-lg text-sm text-body sm:text-center">
                © 2023 <a href="" className="hover:underline">Travel Log</a>. All Rights Reserved.
            </span>
            <ul className="flex text-shadow-lg flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer