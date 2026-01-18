"use client";

import React, { useState } from 'react';
import { MOCK_USER } from '../credentials';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === MOCK_USER.email && password === MOCK_USER.password) {
            // Set cookie for authentication
            Cookies.set("auth", "true", { expires: 1 });
            router.push("/");
        } else {
            setError("Invalid email or password");
        }
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleLogin}
                className=" p-8 rounded-xl shadow-lg w-96"
            >
                <h1 className="text-2xl font-bold mb-6 text-center"> Please Login</h1>
                {error && (
                    <p className="text-red-600 mb-4 text-center font-semibold">{error}</p>
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;