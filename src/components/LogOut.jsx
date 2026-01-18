import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React from 'react';

const LogOut = () => {
    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove("auth");
        router.push("/");
    };
    return (
        <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
            Logout
        </button>
    );
};

export default LogOut;