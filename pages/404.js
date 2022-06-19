import Layout from '../Components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
    return (
        <>
        <Layout>
        <Head>
            <title>dustin.404</title>
        </Head>
        <section className={utilStyles.headingMD}>
            <div className={utilStyles.navList}>
            <Link href="/blogs"><a>Blog</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
            <a href="https://github.com/uncleBlobby">Github</a>
            </div>
        </section>
        <p>This page is still under construction.</p>
        </Layout>
        
        </>
    );
}