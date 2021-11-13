import Layout from '../components/Layout';
import WorkInProgress from '../components/WorkInProgress';
import pageStyles from '../styles/Latest.module.scss';

const Latest = function Latest() {
  return (
    <Layout>
      <div className={pageStyles.flexContainer}>
        <WorkInProgress />
      </div>
    </Layout>
  );
};

export default Latest;
