import navStyles from './Navigation.module.scss'
import NavItem from './NavigationItem'

export default function Nav() {
    return (
        <div className={navStyles.wrapper}>
            <div className={navStyles.nav}>
                <NavItem text="Feed" iconName="/images/feed.svg" link={"/"}></NavItem>
                <NavItem text="Latest" iconName="/images/latest.svg" link={"/latest"}></NavItem>
                <NavItem text="Story" iconName="/images/story.svg" link={"/story"}></NavItem>
                <NavItem text="Random" iconName="/images/random.svg" link={"/random"}></NavItem>
            </div>
        </div>
    )
}