import layoutStyles from './Layout.module.scss'
import Nav from './Navigation'

export default function Layout({children}) {
    return (
        <>
            <Nav></Nav>
            <div className={layoutStyles.layout}>
                <main>{children}</main>
            </div>
        </>
    )
}