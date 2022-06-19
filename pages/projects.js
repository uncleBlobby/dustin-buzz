import Layout from '../Components/layout';
import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function ProjectsHome(){
    return (
        <Layout>
            <Head>
                <title>dustin.blogs</title>
            </Head>
            <section className={utilStyles.headingMD}>
            <div className={utilStyles.navList}>
            <Link href="/blogs"><a>Blog</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
            <a href="https://github.com/uncleBlobby">Github</a>
            </div>
            </section>
            <h1>Projects</h1>
            <Link href="/projects/jester-js"><a>2022-06-19 : jesterJS</a></Link>
            <p className={utilStyles.subText}>Automatic joke collecting bot using python3, sqlite3, express, and react.</p>
            <p className={utilStyles.subText}><a href="https://github.com/uncleBlobby/jesterJS/">Github Repo</a></p>
        </Layout>
    );
}