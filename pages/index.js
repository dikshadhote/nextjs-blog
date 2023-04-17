import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

// static generation of file

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  // get the post data and pass it as prop in home component

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am frontend developer</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h2>static generation of data</h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>

              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <Link href="/posts/first-post">my posts</Link>
          </li>
          <li>
            <Link href="/serverside-render">server side</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
