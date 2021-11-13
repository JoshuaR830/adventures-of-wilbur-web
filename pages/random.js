import Layout from '../components/Layout';
import WorkInProgress from '../components/WorkInProgress';
import pageStyles from '../styles/Random.module.scss';

const Random = function Random() {
  return (
    <Layout>
      <div className={pageStyles.flexContainer}>
        <WorkInProgress />
      </div>
    </Layout>
  );
};

export default Random;
