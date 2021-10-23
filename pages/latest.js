import Layout from "../components/Layout";
import WorkInProgress from "../components/WorkInProgress";
import pageStyles from "../styles/Latest.module.scss"

export default function Latest() {
    return (
        <Layout>
            <div className={pageStyles.flexContainer}>
                <WorkInProgress></WorkInProgress>
            </div>
        </Layout>
    )
}