import navStyles from './Navigation.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavItem({text, iconName, link}) {
    const router = useRouter();
    
    return (
        <Link href={link}>
            <a>
                <div className={`${navStyles.navItem} ${router.pathname===link?navStyles.active:null}`}>
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
            </a>
        </Link>
    )
}