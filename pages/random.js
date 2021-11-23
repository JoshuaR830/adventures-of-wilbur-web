import { useState, useEffect } from 'react';
import FabButton from '../components/FabButton';
import Layout from '../components/Layout';
import HiddenCard from '../components/HiddenCard';
import Card from '../components/Card';
import pageStyles from '../styles/Random.module.scss';

const Random = function Random() {
  const [data, setData] = useState('');

  const getData = async () => {
    // eslint-disable-next-line no-undef
    fetch('https://api.joshuarichardson.dev/WilburRandom')
      .then((res) => res.json()
        .then((d) => {
          setData(d);
        }));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    getData();
  };

  function handleKeyDown(e) {
    if (e.keycode === 13) {
      getData();
    }
  }

  return (
    <Layout>
      <div className={pageStyles.flexContainer}>
        {(data === '' || data === undefined) ? (
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
      <FabButton onClick={(() => handleClick())} onKeyDown={((e) => handleKeyDown(e))} imageSrc="/images/refresh.svg" text="Random" />
    </Layout>
  );
};

export default Random;
