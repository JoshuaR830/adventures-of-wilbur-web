import dotStyles from './dot.module.scss';

const Dot = function Dot({ isSelected }) {
  return (
    <div className={`${dotStyles.dot} ${isSelected ? dotStyles.active : ''}`} />
  );
};

export default Dot;
