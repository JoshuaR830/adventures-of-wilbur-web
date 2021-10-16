import navStyles from './Navigation.module.css'
import Image from 'next/image'
import NavItem from './NavigationItem'

export default function Nav() {
    return (
        <div className={navStyles.nav}>
            <NavItem text="Feed" iconName="/images/feed.svg"></NavItem>
            <NavItem text="Latest" iconName="/images/latest.svg"></NavItem>
            <NavItem text="Story" iconName="/images/story.svg"></NavItem>
            <NavItem text="Random" iconName="/images/random.svg"></NavItem>
        </div>
    )
}