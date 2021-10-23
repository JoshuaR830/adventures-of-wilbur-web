import Layout from '../components/Layout'
import WorkInProgress from "../components/WorkInProgress";
import pageStyles from "../styles/Random.module.scss"

export default function Random() {
    return (
        <Layout>
            <div className={pageStyles.flexContainer}>
                <WorkInProgress></WorkInProgress>
            </div>
        </Layout>
    )
}