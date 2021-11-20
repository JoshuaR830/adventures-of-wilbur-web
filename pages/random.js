import FabButton from '../components/FabButton';
import Layout from '../components/Layout';
import WorkInProgress from '../components/WorkInProgress';
import pageStyles from '../styles/Random.module.scss';

const Random = function Random() {
  return (
    <Layout>
      <div className={pageStyles.flexContainer}>
        <WorkInProgress />
      </div>
      <FabButton imageSrc="/images/random.svg" text="Random" />
    </Layout>
  );
};

export default Random;
