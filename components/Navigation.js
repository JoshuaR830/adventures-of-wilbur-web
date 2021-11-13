import navStyles from './Navigation.module.scss';
import NavItem from './NavigationItem';

const Nav = function Nav() {
  return (
    <div className={navStyles.wrapper}>
      <div className={navStyles.nav}>
        <NavItem text="Feed" iconName="/images/feed.svg" link="/" />
        <NavItem text="Latest" iconName="/images/latest.svg" link="/latest" />
        <NavItem text="Story" iconName="/images/story.svg" link="/story" />
        <NavItem text="Random" iconName="/images/random.svg" link="/random" />
      </div>
    </div>
  );
};

export default Nav;
