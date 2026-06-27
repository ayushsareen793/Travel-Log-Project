import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 w-full p-4 bg-neutral-primary-soft flex justify-center items-center md:p-6">
            <span className="font-bold text-shadow-lg text-sm text-body text-center">
                © 2023 <a href="" className="hover:underline">Travel Log</a>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer