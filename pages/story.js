import Layout from '../components/Layout';
import WorkInProgress from '../components/WorkInProgress';
import pageStyles from '../styles/Story.module.scss';

const Story = function Story() {
  return (
    <Layout>
      <div className={pageStyles.flexContainer}>
        <WorkInProgress image />
      </div>
    </Layout>
  );
};

export default Story;
