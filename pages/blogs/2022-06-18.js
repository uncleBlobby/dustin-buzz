import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../Components/layout'
import utilStyles from '../../styles/utils.module.css'

const Post = () => {
    return (
        <Layout>
            <Head>
                <title>2022/06/18</title>
            </Head>
                <h1>dustin.buzz.deploy()</h1>
                <p>Today is the day, folks.  We are T minus zero to launch time.</p>
                <div className={utilStyles.gifHolder}>
                <Image 
                    priority
                    src="/gifs/rocket-lift-off.gif"
                    className={utilStyles.medGif}
                    height={144}
                    width={144}
                    alt="rocket lift off"
                />
                </div>
                <p>After a good while messing with javascript/html/css, a couple university classes on programming and learning computer science, a number of half-finished personal projects, and about eighteen months overall of more-or-less self-directed learning, we are finally at a stage where deploying our personal site has become priority numero uno.</p>
                <p>Enter <a href="https://nextjs.org">NextJS</a>.</p>

                <p>NextJS is a framework I have heard of in the past, mentioned on tech forums, coder blogs, and brilliant job ads for local and global tech start-ups.</p>

                <p>What on Earth is it?</p>

                <p>According to the official documentation, NextJS is "<i>the</i> React Framework for Production".  It offers "the best" experience for a developer and all kinds of features which I haven't even got to learn yet.</p>
                <p>...</p>
                <p>I have been learning a little bit of React, since it seems to be one of the most in-demand technologies on the job boards.  I don't necessarily know enough about it to be 100% confident building a SPA for a paying client, but I am getting somewhere.</p>
                <p>I have started to wrap my head around functional components, state, and using hooks to manage data.  I've even begun work on putting together a couple full-stack applications (check on my github, <a href="https://github.com/uncleBlobby/jesterJS/">here</a>) using React for the front-end, and the ViteJS framework to help scaffold the development environment.</p>
                <p>...</p>
                <p>For a while, though, I thought React was a framework?  Then I staretd to hear about frameworks vs. libraries, and what differences the two bring to the table.  Turns out, at the front-end feast, the table is full of options.</p>
                <p>Follow along with me as I continue to poke around NextJS and learn to use it more effectively as a tool to showcase my progress and document my journey.</p>
                <p>&#129299;</p>
                <p>Bye for now.</p>

        </Layout>
    );
}

export default Post;