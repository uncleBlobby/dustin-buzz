import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../Components/layout'

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post -- 2022/06/18</title>
            </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
        </Layout>
    );
}

export default FirstPost