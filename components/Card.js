import Image from 'next/image';
import cardStyles from './card.module.scss';

// eslint-disable-next-line no-unused-vars
const myLoader = ({ src, width, quality }) => `${src}`;

const Card = function Card({ body, title, wilburImage }) {
  return (
    <div className={`${cardStyles.container} ${cardStyles.dark}`}>
      <div className={cardStyles.cardTop}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div className={cardStyles.image}>
        <div className={cardStyles.loader} />
        <Image
          priority
          src={wilburImage}
          alt="Picture of wilbur"
          layout="fill"
          objectFit="cover"
          className={cardStyles.image}
          loader={myLoader}
        />
      </div>
    </div>
  );
};

export default Card;
