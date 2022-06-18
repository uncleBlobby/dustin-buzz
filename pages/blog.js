import Layout from '../Components/layout';
import Head from 'next/head';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout home>
            <h1>Blog</h1>
            <Link href="blog/2022-06-18"><a>2022-06-18</a></Link>
        </Layout>
    );
}

export default Blog;