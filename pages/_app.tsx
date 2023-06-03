import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="p-2">
            <Head>
                <title>Michael Ryans Portfolio</title>
                <meta
                    name="description"
                    content="A portfolio of work and experience for Michael J Ryan. Multiple startup founder, software engineer: Games, websites, apps, devices, and more."
                />
                <link rel="icon" href="/images/favicons/favicon.ico" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}
