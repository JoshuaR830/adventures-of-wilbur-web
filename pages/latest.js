import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import HiddenCard from '../components/HiddenCard';
import Card from '../components/Card';
import pageStyles from '../styles/Latest.module.scss';

const Latest = function Latest() {
  const [data, setData] = useState('');

  const getData = async () => {
    // eslint-disable-next-line no-undef
    fetch('https://api.joshuarichardson.dev/WilburLatest')
      .then((res) => res.json()
        .then((d) => {
          setData(d);
        }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div className={pageStyles.flexContainer}>
        {(data === '') ? (
          <HiddenCard />
        ) : (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            body={data.body}
            wilburImage={`https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/${data.wilburImage}`}
          />
        )}
      </div>
    </Layout>
  );
};

export default Latest;
