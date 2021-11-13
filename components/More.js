import { useState } from 'react';
import Image from 'next/image';
import moreStyles from './More.module.scss';

// eslint-disable-next-line no-unused-vars
const myLoader = ({ src, width, quality }) => `${src}`;

const More = function More({ content, isVisible }) {
  const [visibility, setVisibility] = useState(isVisible);

  function handleChange() {
    setVisibility(!visibility);
  }

  function handleKeyDown(e) {
    if (e.keycode === 13) {
      handleChange();
    }
  }

  return (
    <div role="button" onClick={() => handleChange()} onKeyDown={(e) => handleKeyDown(e)} tabIndex="0">
      <div className={moreStyles.outer}>
        <div className={`${visibility ? moreStyles.more : moreStyles.less} ${moreStyles.section}`}>{content}</div>
        <div>
          <hr />
        </div>
        <div className={moreStyles.container}>
          <div>{visibility ? 'Less' : 'More'}</div>
          <Image
            src={`/images/expand/${visibility ? 'less' : 'more'}.svg`}
            width={24}
            height={24}
            loader={myLoader}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default More;
