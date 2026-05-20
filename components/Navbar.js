import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (

        <nav className="bg-[#faf9f6] fixed w-full z-20 top-0 inset-s-0">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">

                    {/* <span classNameName="self-center text-xl text-heading font-semibold whitespace-nowrap">Travel Log</span> */}
                    <span className="text-2xl  text-black text-shadow-lg font-bold tracking-tighter">Travel Log</span>
                    <img src="/globe.gif" alt="" height={10} width={43}/>
                </a>
                <Link href={"/Login"}>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-l font-bold inline-flex items-center justify-center text-black text-shadow-lg  bg-brand box-border hover:underline" type="button" >
                        Login
                        <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                        </svg>
                    </button>
                </Link>



            </div>
        </nav>

    );
};

export default Navbar;