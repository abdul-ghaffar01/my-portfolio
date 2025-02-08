import React from 'react';
import Logo from './navbar/Logo';

const Loader = () => {
    return (
        <div className="w-screen h-[100dvh] bg-purple-900 flex items-center justify-center">
            <Logo />
        </div>
    );
};

export default Loader;
