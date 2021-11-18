import useSWRInfinite from 'swr/infinite';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import HiddenCard from '../components/HiddenCard';
import Layout from '../components/Layout';
import styles from '../styles/Feed.module.scss';

const getKey = (pageIndex, previousPageData) => {
  if (pageIndex === 0 && previousPageData === null) {
    return `https://api.joshuarichardson.dev/WilburPagedItemNewestFirst?page=${pageIndex}&limit=${6}`;
  }

  if (previousPageData && !previousPageData.length) {
    return null;
  }

  return `https://api.joshuarichardson.dev/WilburPagedItemNewestFirst?page=${pageIndex}&limit=${6}`;
};

const Home = function Home() {
  const [isHidden, setIsHidden] = useState(false);
  const [prevSize, setPrevSize] = useState(0);

  const [previousHeight, setPreviousHeight] = useState(0);

  const fetcher = async (url) => {
    // eslint-disable-next-line no-undef
    const res = await fetch(url);
    return res.json();
  };

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  const handleClick = () => {
    setSize(size + 1);
    setIsHidden(false);
  };

  const handleScroll = () => {
    if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 1000) {
      if (document.body.scrollHeight > previousHeight) {
        setPreviousHeight(document.body.scrollHeight);
        handleClick();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  if (!data) {
    return (
      <Layout>
        <div className={styles.flexContainer}>
          <HiddenCard />
          <HiddenCard />
          <HiddenCard />
          <HiddenCard />
          <HiddenCard />
          <HiddenCard />
        </div>
      </Layout>
    );
  }

  if (data.length !== prevSize) {
    setIsHidden(true);
    setPrevSize(data.length);
  }

  return (
    <Layout>
      <div className={styles.flexContainer} onScroll={() => handleScroll()}>
        {
          data.map((posts) => posts.map(({
            id, title, body, wilburImage,
          }) => (
            <Card
              key={id}
              id={id}
              title={title}
              body={body}
              wilburImage={`https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/${wilburImage}`}
            />
          )))
        }

        {(!isHidden) ? (
          <>
            <HiddenCard />
            <HiddenCard />
            <HiddenCard />
            <HiddenCard />
            <HiddenCard />
            <HiddenCard />
          </>
        ) : (
          <div className={styles.fullWidth} />
        )}
      </div>
    </Layout>
  );
};

export default Home;
