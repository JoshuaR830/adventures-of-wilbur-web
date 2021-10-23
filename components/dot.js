import dotStyles from './dot.module.scss'

export default function Dot({isSelected}) {
    return (
        <>
            <div className={`${dotStyles.dot} ${isSelected ? dotStyles.active : ""}`}></div>
        </>
    )
}