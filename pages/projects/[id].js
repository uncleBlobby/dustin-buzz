import Layout from '../../Components/layout'
import { getAllPostIds, getPostData } from '../../lib/projects'
import Head from 'next/head'
import Date from '../../Components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <h1 className={utilStyles.headingXL}>{postData.title}</h1>
      <br />
      <div className={utilStyles.darkText}><Date dateString={postData.date}/></div>
      <br />
      <div dangerouslySetInnerHTML={ { __html: postData.contentHtml } } />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}