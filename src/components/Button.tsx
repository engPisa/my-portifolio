import React from "react";  

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
    const baseStyles = "px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    const variantStyles = variant === "primary"
    ? "bg-[#3b352e] text-white"
    : "bg-white text-[#3b352e] border border-[#3b352e] hover:bg-gray-50";

    return (
        <button className={`${baseStyles} ${variantStyles}`}>
            {children}
        </button>
    );
}