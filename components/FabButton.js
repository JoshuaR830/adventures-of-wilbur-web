import Image from 'next/image'
import style from './fabButton.module.scss';

// eslint-disable-next-line no-unused-vars
const myLoader = ({ src, width, quality }) => `${src}`;

const FabButton = function FabButton({imageSrc, text}) {
  return (
    <div className={`${style.fabButton} ${style.animated}`}>
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
  )
}

export default FabButton;