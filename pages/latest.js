import { useState } from 'react';
import Layout from '../components/Layout';
import HiddenCard from '../components/HiddenCard';
import Card from '../components/Card';
import pageStyles from '../styles/Latest.module.scss';

const Latest = function Latest() {
  const [data, setData] = useState('');

  fetch('https://api.joshuarichardson.dev/WilburPagedItemNewestFirst?page=0&limit=1')
    .then((res) => res.json()
      .then((d) => {
        setData(d);
      }));

  return (
    <Layout>
      <div className={pageStyles.flexContainer}>
        {(data === '') ? (
          <HiddenCard />
        ) : (
          <Card
            key={data[0].id}
            id={data[0].id}
            title={data[0].title}
            body={data[0].body}
            wilburImage={`https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/${data[0].wilburImage}`}
          />
        )}
      </div>
    </Layout>
  );
};

export default Latest;
