const staticPage = ({ time }: { time: any }) => {
  return <div>{time}</div>;
};

export const getStaticProps = async () => {
  // 3초마다 갱신 처리
  return { props: { time: new Date().toISOString() }, revalidate: 3 };
};

export default staticPage;
