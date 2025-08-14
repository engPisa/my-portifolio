import React from "react";  

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    iconLeft?: React.ReactNode;
}

export default function Button({ children, variant = "primary", iconLeft }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-12 py-3 font-sans font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent";
    const variantStyles = variant === "primary"
    ? "bg-foreground text-background"
    : "bg-secondary text-secundary-foreground border border-border";
    return (
        <button className={`${baseStyles} ${variantStyles}`}>
            {iconLeft && <span className="mr-4">{iconLeft}</span>}
            {children}
        </button>
    );
}