import Head from 'next/head'
import Image from 'next/image';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'dustin.buzz'
export const siteTitle = 'dustin.buzz'

const Layout = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/dustin-buzz.svg" />
                <meta
                    name="description"
                    content="Dustin Christianson's personal website"
                />
                <meta
                    property="og:image"
                    content="/images/dustin-buzz.svg"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/dustin-buzz.svg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2XL}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                        <a>
                        <Image
                            priority
                            src="/images/dustin-buzz.svg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        </a>
                        </Link>
                        <h2 className={utilStyles.heading2XL}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>??? Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Layout;