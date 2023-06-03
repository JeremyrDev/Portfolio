import Image from 'next/image';
import React, { useState } from 'react';

function Navbar() {
    const [isMobileMenuVisible, SetMobileMenuVisibility] = useState<Boolean>(false);
    return (
        <>
            <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
                {/* Logo */}
                <Image
                    className="md:ml-16"
                    src="/images/logo.png"
                    width={55}
                    height={55}
                    alt="logo"
                />
                {/* Mobile Menu button */}
                <div
                    className={
                        'block sm:hidden mr-4 transition-transform duration-200 ' +
                        (isMobileMenuVisible ? '-rotate-90' : 'rotate-0')
                    }
                >
                    <Image
                        className="transition-transform duration-200 hover:scale-110"
                        src="/images/icons/menu-button.svg"
                        width={30}
                        height={30}
                        alt="menu button"
                        onClick={() =>
                            SetMobileMenuVisibility(!isMobileMenuVisible)
                        }
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-x-12 md:mr-16">
                    <a
                        className={'menu-item'}
                        href="#skills"
                    >
                        Skills
                    </a>
                    <a
                        className={'menu-item'}
                        href="#work"
                    >
                        Work
                    </a>
                    <a
                        className={'menu-item'}
                        href="#contact"
                    >
                        Contact
                    </a>
                    <a
                        className={'menu-item'}
                        href="#project"
                    >
                        Start a Project
                    </a>
                </div>
            </div>
            
            {/* Mobile menu */}
            <div
                className={`flex sm:hidden w-full flex-col gap-y-2 items-center justify-center transition-all duration-200 ${
                    isMobileMenuVisible ? 'h-40' : 'h-0 pointer-events-none'
                }`}
            >
                <a
                    className={
                        'menu-item  ' +
                        (isMobileMenuVisible
                            ? 'duration-200 opacity-100'
                            : 'duration-100 opacity-0')
                    }
                    href="#skills"
                >
                    Skills
                </a>
                <a
                    className={
                        'menu-item  ' +
                        (isMobileMenuVisible
                            ? 'duration-400 opacity-100'
                            : 'duration-200 opacity-0')
                    }
                    href="#work"
                >
                    Work
                </a>
                <a
                    className={
                        'menu-item ' +
                        (isMobileMenuVisible
                            ? 'duration-300 opacity-100'
                            : 'duration-200 opacity-0')
                    }
                    href="#contact"
                >
                    Contact
                </a>
                <a
                    className={
                        'menu-item ' +
                        (isMobileMenuVisible
                            ? 'duration-200 opacity-100'
                            : 'duration-400 opacity-0')
                    }
                    href="#project"
                >
                    Start a Project
                </a>
            </div>
        </>
    );
}

export default Navbar;
