import React from 'react';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import Link from 'next/link';
import "@/app/style/main.css";

interface INavItem {
    href: string;
    label: string;
    icon?: string;
    dropdown?: INavItem[];
}

const navItems: INavItem[] = [
    { href: '#hero', label: 'Home'},
    { href: '#about', label: 'About'},
    { href: '#resume', label: 'Resume'},
    { href: '#portfolio', label: 'Project'},
    { href: '#contact', label: 'Contact'},
    { href: '#blog', label: 'Blog'}
];

export default function Header() {
    return (
        <header id="header" className="header dark-background d-flex flex-column">
            <div className="profile-img">
                <img src="/ava.png" alt="" className="img-fluid rounded-circle" />
            </div>
            <Link href="/" className="logo d-flex align-items-center justify-content-center">
                <h1 className="sitename">Nguyễn Mạnh Hùng</h1>
            </Link>
            <div className="social-links text-center">
                <Link href="https://github.com/Hung369" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </Link>
                <Link href="#">
                    <FaLinkedin />
                </Link>
            </div>

            <nav id="navmenu" className="navmenu">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            {item.dropdown ? (
                                <>
                                    <Link href={item.href}>
                                        {item.icon && <i className={item.icon}></i>}
                                        <span>{item.label}</span>
                                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                                    </Link>
                                    <ul>
                                        {item.dropdown.map((subItem) => (
                                            <li key={subItem.href}>
                                                <Link href={subItem.href}>{subItem.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link href={item.href}>
                                    {item.icon && <i className={item.icon}></i>}
                                    <span>{item.label}</span>
                                </Link>
                            )}
                        </li>))}
                </ul>
            </nav>
        </header>
    );
};