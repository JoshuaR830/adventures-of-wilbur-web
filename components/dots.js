import Dot from './dot';
import dotStyles from './dot.module.scss';

const Dots = function Dots() {
  return (
    <div className={dotStyles.outerContainer}>
      <div className={dotStyles.container}>
        <Dot isSelected />
        {/* <Dot></Dot> */}
        {/* <Dot></Dot> */}
      </div>
    </div>
  );
};

export default Dots;
