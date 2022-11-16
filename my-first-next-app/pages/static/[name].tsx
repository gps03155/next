import fetch from 'isomorphic-unfetch';

const name = ({ user }: { user: any }) => {
  const username = user && user.name;
  return <div>{username}</div>;
};

export const getStaticProps = async ({ params }: { params: any }) => {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    const user = await res.json();

    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toISOString() } };
    }

    return { props: { time: new Date().toISOString() } };
  } catch (e) {
    console.log(e);
    return { props: { time: new Date().toISOString() } };
  }
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: 'jerrynim' } }],
    fallback: true,
  };
}

export default name;
