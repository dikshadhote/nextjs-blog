import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <Layout>
      <Head> {postData.title}</Head>
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  // [ {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },...]
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// this method is called for each path object inside paths array
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
