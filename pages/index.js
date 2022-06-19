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
      <a href="https://github.com/uncleBlobby">Github</a>
      </div>       
      </section>
      <section>
        <p>My name is Dustin Christianson and I am studying software development.  I use this page to catalogue some of my work and share my thoughts.  Thanks for stopping by!</p>
        <p>Some of my current interests include:</p>
        <ul>
          <li>React Frontend (ViteJS, NextJS in particular)</li>
          <li>ExpressJS Backend</li>
          <li>Sqlite3 RDMS, SQL</li>
          <li>Python, Go, and C</li>
          <li>Linux, FOSS</li>
        </ul>
        <p>Outside of software development, I have a variety of other interests.  I hold a B.A. in Philosophy from the University of Regina, and I 
        am currently doing independent research in the field of games-based learning, reading <a href="https://en.wikipedia.org/wiki/Johan_Huizinga">Huizinga</a> and 
        <a href="https://en.wikipedia.org/wiki/Mihaly_Csikszentmihalyi"> Csikszentmihalyi</a>, trying to tie some of their work back into <a href="https://en.wikipedia.org/wiki/Hans-Georg_Gadamer">Gadamer's</a> theory of play 
        from his magnum opus <i><a href="Truth and Method">Truth and Method</a></i>. Don't worry, I can't pronounce the guy's name either.</p>
        <p>On top of it all, I work full time in the craft beverage industry and I am currently studying Computer Science part - time at the University of Regina.</p>
        <p>In my free time, I like to play video games--and I would really like to eventually create one of my own.  I have had a few false starts in that regard, but 
        learning to work with video game engines (<a href="https://godotengine.org/">Godot</a>, in particular) has been a fun experience, and helpful in terms of applying some of the things I've been learning about programming.</p>
        <p>I've spent almost 20 years learning to play guitar, and more recently took it on myself to start trying to sing as well.  Also more recently, I've inherited
        my grandfather's old accordion--but I've still got a long way to go before I can play it with any sort of confidence.  <p>Apologies to my neighbours.</p>  I have released a 
        few <a href="https://soundcloud.com/jonny-strangelove">electronic music EP</a>'s, started a <a href="https://soundcloud.com/uncleblobby">rap album</a> I have yet to finish, 
        worked on audio for several <a href="https://youtu.be/4rYnJ9R9-6c">independent short films</a>, and recorded almost 50 <a href="https://open.spotify.com/show/5zxwf7aKetUdWIbpk7O0vI?si=a583dcec09d64f11">podcast episodes</a> with some of my good pals.</p>
        <p>&#128075; Bye for now! &#128075;</p>
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
              <small className={utilStyles.darkText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      
    </Layout>
  );
}
