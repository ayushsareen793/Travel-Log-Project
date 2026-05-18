import React from "react";

const Navbar = () => {
    return (

        <nav className="bg-neutral-primary fixed w-full z-20 top-0 inset-s-0 border-default">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">

                    {/* <span classNameName="self-center text-xl text-heading font-semibold whitespace-nowrap">Travel Log</span> */}
                    <span className="text-2xl f text-black text-shadow-lg font-bold tracking-tighter">Travel Log</span>
                </a>

                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="font-bold inline-flex items-center justify-center text-black text-shadow-lg  bg-brand box-border hover:underline" type="button" >
                    Login
                    <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div id="dropdown" className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                    <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Home</a>
                        </li>
                        <li>
                            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">New-Log</a>
                        </li>
                        <li>
                            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>

    );
};

export default Navbar;