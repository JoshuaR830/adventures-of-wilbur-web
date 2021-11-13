import Image from 'next/image';
import Dots from './dots';
import More from './More';
import highlightStyles from './highlight.module.scss';

// eslint-disable-next-line no-unused-vars
const myLoader = ({ src, width, quality }) => `${src}`;

const Highlight = function Highlight({ body, title, wilburImage }) {
  return (
    <>
      <div className={`${highlightStyles.container} ${highlightStyles.dark}`}>
        <div className={highlightStyles.highlightLeft}>
          <h1 className={highlightStyles.title}>{title}</h1>
          <p className={highlightStyles.description}>{body}</p>
          <More content={body} isVisible={false} />
        </div>
        <div className={highlightStyles.highlightRight}>
          <Image
            priority
            src={wilburImage}
            alt="Picture of wilbur"
            layout="fill"
            objectFit="cover"
            className={highlightStyles.image}
            loader={myLoader}
          />
        </div>
      </div>
      <Dots />
    </>
  );
};

export default Highlight;
