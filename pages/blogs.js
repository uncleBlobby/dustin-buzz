import Layout from '../Components/layout';
import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function BlogsHome(){
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
            <h1>Blog</h1>
            <Link href="/blogs/light-reading"><a>2022-06-25 : light reading</a></Link>
            <p className={utilStyles.subText}>Do you smell that?  Smells like books in here.</p>
            <Link href="/blogs/smokers-first-jog"><a>2022-06-18 : smoker's first jog</a></Link>
            <p className={utilStyles.subText}>Left foot, right foot, one breath at a time.  Wheeze.</p>
            <Link href="/blogs/220618"><a>2022-06-18 : dustin.buzz.deploy()</a></Link>
            <p className={utilStyles.subText}>The time has come to begin again.</p>
        </Layout>
    );
}