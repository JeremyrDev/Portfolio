import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { TwitterIcon, LinkedInIcon, InstagramIcon, EmailIcon } from './icons';
import Link from 'next/link';

function Header() {
    let [currentProfileImage, SetCurrentProfileImage] = useState(0);
    const profileImages = [
        '/images/profile.png',
        '/images/alt.png',
        '/images/alt2.png',
    ];

    useEffect(() => {
        setTimeout(() => {
            SetCurrentProfileImage(
                currentProfileImage == 2 ? 0 : currentProfileImage + 1,
            );
        }, 3000);
    }, [currentProfileImage]);
    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-8 my-32">
            {/* Title */}
            <h1 className="text-center text-[2.8em] font-bold font-[Eurostile] leading-[50px]">
                Hi, I'm Jeremy,
                <br />A Full-Stack Engineer
            </h1>
            {/* Sub-title */}
            <h4 className="text-center -mt-4 text-[1.4em] font-[Eurostile]">
                NextJS / React / Anguar 2+ / Unity3D / Swift / JavaScript /
                Nodejs
            </h4>

            {/* Profile Photo */}
            <div>
                <Image
                    className="rounded-full"
                    src={profileImages[currentProfileImage]}
                    width={200}
                    height={200}
                    alt="logo"
                />
            </div>

            {/* Socials */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                <a href="" className="social-icon">
                    <TwitterIcon height={'35px'} />
                </a>
                <a href="" className="social-icon">
                    <LinkedInIcon height={'35px'} />
                </a>
                <a href="" className="social-icon">
                    <InstagramIcon height={'35px'} />
                </a>
                <a href="" className="social-icon">
                    <EmailIcon height={'35px'} />
                </a>
            </div>

            <Link href="/Resume-2022.pdf" className="button-outline-primary">View Resume</Link>
            {/* <dialog open>
                <form action="dialog">
                    <iframe
                        src="/Resume-2022.pdf"
                        className="w-[500px] h-[500px]"
                    ></iframe>
                </form>
            </dialog> */}
        </div>
    );
}

export default Header;
