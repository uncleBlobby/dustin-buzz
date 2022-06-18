import Head from 'next/head';
import Layout, { siteTitle } from '../Components/layout';
import News from '../Components/news';
import utilStyles from '../styles/utils.module.css';

import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMD}>
      <div className={utilStyles.navList}>
      <Link href="/pages/blog"><a>Blog</a></Link>
      <Link href="/pages/projects"><a>Projects</a></Link>
      <Link href="/pages/about"><a>About</a></Link>
      </div>       
        <p>My name is Dustin Christianson and I am studying software development.</p>
        <p>My current interests include:</p>
        <ul>
          <li>React Frontend (ViteJS, NextJS in particular)</li>
          <li>ExpressJS Backend</li>
          <li>Sqlite3 RDMS, SQL</li>
          <li>Python, Go, and C</li>
        </ul>
        <p>
          This is a simple website I use to catalogue my work and to share my thoughts.  Thanks for stopping by, I really hope you enjoy your stay.
        </p>
      </section>
      <News>
        <section className={utilStyles.headingMD}>
        <p><Link href="blog/2022-06-18"><a>2022-18-06: dustin.buzz.deploy()</a></Link></p>
        </section>
        <p className={utilStyles.subText}>Left foot, right foot, one breath at a time.</p>
      </News>
    </Layout>
  );
}
