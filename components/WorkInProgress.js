import Card from './Card';

const WorkInProgress = function WorkInProgress({ image }) {
  return (
    <div>
      {image ? (
        <Card body="Wilbur is busy writing code to make this website the best it can be, but even with paws as nimble as his, it takes time." title="Work in progress" wilburImage="/images/wilbur-placeholder.png" />
      ) : (
        <Card body="Wilbur is busy writing code to make this website the best it can be, but even with paws as nimble as his, it takes time." title="Work in progress" wilburImage="https://adventures-of-wilbur-images.s3.eu-west-2.amazonaws.com/Wilbur_2020_8_16_1_38_21_917.jpg" />
      )}
    </div>
  );
};

export default WorkInProgress;
