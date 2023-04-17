

function ServerSidePage({ data }) {
  return (
    <div>
      <h1>Server-side rendering with Next.js</h1>
      <p>{data}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  // Return the data as props
  return { props: { data: data.title } };
}

export default ServerSidePage;