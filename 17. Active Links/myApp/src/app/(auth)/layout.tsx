'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"}
]

export default function layout({children} : {children: React.ReactNode}) {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                    <>
                        <Link className={isActive ? "font-bold text-red-500 mr-4" : "mr-4"} href={link.href} key={link.name}>
                            {link.name}
                        </Link>
                    </>
                )
            })}
            {children}
        </>
    )
}