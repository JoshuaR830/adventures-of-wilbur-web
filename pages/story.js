import { useState, useEffect } from 'react';
import FabButton from '../components/FabButton';
import Layout from '../components/Layout';
import HiddenCard from '../components/HiddenCard';
import Card from '../components/Card';
import pageStyles from '../styles/Story.module.scss';

const Story = function Story() {
  const [data, setData] = useState('');
  let storyItem = 1;
  let isNext = false;

  const getData = async () => {
    // eslint-disable-next-line no-undef
    fetch(`https://api.joshuarichardson.dev/WilburStory?currentPage=${storyItem}&isNext=${isNext}`)
      .then((res) => res.json()
        .then((d) => {
          setData(d);
        }));
  };

  useEffect(() => {
    getData();
  }, []);

  const getNextStoryItem = () => {
    storyItem = data.id;
    isNext = true;
    getData();
  };

  const getPreviousStoryItem = () => {
    storyItem = data.id;
    isNext = false;
    getData();
  };

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
      <FabButton onClick={(() => getNextStoryItem())} imageSrc="/images/next-page.svg" text="Next" />
      <FabButton onClick={(() => getPreviousStoryItem())} imageSrc="/images/previous-page.svg" text="Previous" previous />
    </Layout>
  );
};

export default Story;
