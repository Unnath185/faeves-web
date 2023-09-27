import React, { useState } from 'react';
import Image from 'next/image'

export default function Login() {
    const [showLogin, setShowLogin] = useState(false);

    const openLogin = () => {
        setShowLogin(true);
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                {showLogin && (
                    <div className="absolute top-2 right-2 cursor-pointer" onClick={closeLogin}>
                        <span className="text-gray-600 text-xl"> X </span>
                    </div>
                )}
                {!showLogin ? (
                    <Image
                        src="heart-svgrepo-com.svg"
                        alt="Login Image"
                        className="mx-auto mb-4 cursor-pointer"
                        width="30"
                        height="30"
                        onClick={openLogin} // Open login on image click
                    />
                ) : (
                    <div>
                        <h1 className="text-3xl font-semibold text-center text-black-700">
                           ACCOUNT
                        </h1>
                        <h2 className="text-3xl font-semibold text-center text-black-700">
                           LOG IN
                        </h2>

                        <form className="mt-6">
                        <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <a
                                href="#"
                                className="text-xs text-purple-600 hover:underline"
                            >
                                Forgot Password?
                            </a>
                            <div className="mt-6">
                                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
