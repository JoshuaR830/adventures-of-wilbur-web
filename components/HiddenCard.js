import cardStyles from './hiddenCard.module.scss';

const myLoader = ({ src, width, quality }) => {
    return `${src}`
}

  
export default function HiddenCard() {
    return (
        <div className={`${cardStyles.container} ${cardStyles.dark}`}>
            <div className={cardStyles.topContainer}>
                <div className={cardStyles.cardTop}>
                    <div className={cardStyles.loadingTitle}></div>
                    <div className={cardStyles.paragraphContainer}>
                        <div className={cardStyles.loadingFull}></div>
                        <div className={cardStyles.loadingFull}></div>
                        <div className={cardStyles.loadingHalf}></div>
                    </div>
                </div>
            </div>
            <div className={cardStyles.image}>
                <div className={cardStyles.loader}></div>
            </div>
        </div>
    )
}