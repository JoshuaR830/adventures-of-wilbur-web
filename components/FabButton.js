import Image from 'next/image';
import style from './fabButton.module.scss';

// eslint-disable-next-line no-unused-vars
const myLoader = ({ src, width, quality }) => `${src}`;

const FabButton = function FabButton({
  onClick, imageSrc, text, previous, onKeyDown, animated,
}) {
  return (
    <div tabIndex="0" role="button" onClick={onClick} onKeyDown={onKeyDown} className={`${style.fabButton} ${animated ? style.animated : ''} ${style.absolute} ${(previous ? style.left : style.right)}`}>
      <div className={style.imageContainer}>
        <Image
          src={imageSrc}
          alt=""
          height={24}
          width={24}
          loader={myLoader}
        />
      </div>
      <div className={style.buttonText}>{text}</div>
    </div>
  );
};

export default FabButton;
