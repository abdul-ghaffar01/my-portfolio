import React from 'react';

const NeonText = ({ children, color = 'blue', glowColor = null, className = '' }) => {
    const glow = glowColor || color; // Default glow color to the text color if not provided

    return (
        <span
            className={`
        ${className}
        text-xl font-bold  // Adjust size and weight as needed
        ${/* Main text color */ ''} text-${color}-500 
        ${/* Shadow for neon effect */ ''}  
        drop-shadow-[0_0_5px_${glow}]
        drop-shadow-[0_0_10px_${glow}]
        drop-shadow-[0_0_15px_${glow}]
      `}
            style={{
                textShadow: `0 0 5px ${glow}, 0 0 10px ${glow}, 0 0 15px ${glow}`, // fallback for browsers that don't support drop-shadow
            }}
        >
            {children}
        </span>
    );
};


const Logo = () => {
    return (
        <div className="flex items-center justify-center"> {/* Dark background for better visibility */}
            {/* <NeonText color="red" glowColor="yellow" className="text-4xl">
                Neon Text!
            </NeonText>
            <br />
            <NeonText color="green" className="text-2xl">
                Another Example
            </NeonText>
            <br /> */}
            <NeonText color="purple" glowColor="pink" className="text-3xl ml-3">
                Abdul Ghaffar
            </NeonText>

        </div>
    );
};

export default Logo;