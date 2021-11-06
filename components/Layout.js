import layoutStyles from './Layout.module.scss'
import Nav from './Navigation'
import Head from 'next/head'
import Script from 'next/script'

export default function Layout({children}) {
    return (
        <>
        <div className={layoutStyles.container}>
            <Nav></Nav>
            <div className={layoutStyles.layout}>
                <main>{children}</main>
            </div>
        </div>
        </>
    )
}