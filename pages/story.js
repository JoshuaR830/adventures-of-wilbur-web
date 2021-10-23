import Layout from '../components/Layout'
import WorkInProgress from "../components/WorkInProgress";
import pageStyles from "../styles/Story.module.scss"

export default function Story() {
    return (
        <Layout>
            <div className={pageStyles.flexContainer}>
                <WorkInProgress></WorkInProgress>
            </div>
        </Layout>
    )
}