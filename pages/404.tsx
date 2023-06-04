import Image from 'next/image';

export default function Custom404() {
    return (
        <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-y-8">
            <Image
                src="/images/icons/shield.svg"
                width={64}
                height={64}
                alt="404"
            />
            <h1 className="text-4xl">404 - Page Not Found</h1>
            <a href={'/'} className="button-solid-primary">
                {'Back to Home'}
            </a>
        </div>
    );
}
