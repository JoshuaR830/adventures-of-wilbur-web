import cardStyles from './hiddenCard.module.scss';

const Hiddencard = function HiddenCard() {
  return (
    <div className={`${cardStyles.container} ${cardStyles.dark}`}>
      <div className={cardStyles.topContainer}>
        <div className={cardStyles.cardTop}>
          <div className={cardStyles.loadingTitle} />
          <div className={cardStyles.paragraphContainer}>
            <div className={cardStyles.loadingFull} />
            <div className={cardStyles.loadingFull} />
            <div className={cardStyles.loadingHalf} />
          </div>
        </div>
      </div>
      <div className={cardStyles.image}>
        <div className={cardStyles.loader} />
      </div>
    </div>
  );
};

export default Hiddencard;
