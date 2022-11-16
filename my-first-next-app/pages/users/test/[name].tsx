import fetch from 'isomorphic-unfetch';

const name = ({ user }: { user: any }) => {
  const username = user && user.name;
  return <div>{username}</div>;
};

/**
 * next 9.3 버전 이전
 * getInitialProps
 */
name.getInitialProps = async ({ query }: { query: any }) => {
  const { name } = query;

  try {
    const res = await fetch(`https://api.github.com/users/${name}`);

    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }

    return { props: {} };
  } catch (e) {
    console.log(e);
    return {};
  }
};

/**
 * next 9.3 버전부터 권장
 * getServerSideProps
 */
// export const getServerSideProps = async ({ query }: { query: any }) => {
//   const { name } = query;

//   try {
//     const res = await fetch(`https://api.github.com/users/${name}`);

//     if (res.status === 200) {
//       const user = await res.json();
//       return { props: { user } };
//     }

//     return { props: {} };
//   } catch (e) {
//     console.log(e);
//     return { props: {} };
//   }
// };

export default name;
