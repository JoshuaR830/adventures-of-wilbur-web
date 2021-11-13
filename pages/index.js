import useSWRInfinite from 'swr/infinite';
import { useState } from 'react';
import fetch from 'node-fetch';
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

  const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
  };

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  const handleClick = () => {
    setSize(size + 1);
    setIsHidden(false);
  };

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
      <div className={styles.flexContainer}>
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

        {isHidden ? (
          <div className={styles.fullWidth}>
            <button type="button" onClick={() => handleClick()}>More</button>
          </div>
        ) : (
          <div>
            <HiddenCard />
            <HiddenCard />
            <HiddenCard />
            <HiddenCard />
            <HiddenCard />
            <HiddenCard />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
