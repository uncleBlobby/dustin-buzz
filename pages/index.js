import Head from 'next/head';
import Layout, { siteTitle } from '../Components/layout';
import News from '../Components/news';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

import Link from 'next/link'
import Date from '../Components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMD}>
      <div className={utilStyles.navList}>
      <Link href="/blogs"><a>Blog</a></Link>
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blogs/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      
    </Layout>
  );
}
