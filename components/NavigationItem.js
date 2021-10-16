import navStyles from './Navigation.module.css'
import Image from 'next/image'

export default function NavItem({text, iconName}) {
    return (
        <div className={navStyles.navItem}>
            <div className={navStyles.navItem}>
                <div className={navStyles.navItemIconContainer}>
                    <Image 
                        priority
                        src={iconName}
                        width={24}
                        height={24}/>
                </div>
                <div className={navStyles.navItemText}>{text}</div>
            </div>
        </div>
    )
}