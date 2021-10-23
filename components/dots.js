import Dot from './dot'
import dotStyles from './dot.module.scss'

export default function Dots() {
    return (
        <>
        <div className={dotStyles.outerContainer}>
            <div className={dotStyles.container}>
                <Dot isSelected={true}></Dot>
                {/* <Dot></Dot> */}
                {/* <Dot></Dot> */}
            </div>
        </div>
        </>
    )
}