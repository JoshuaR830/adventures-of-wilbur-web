import cardStyles from './card.module.scss'
import Image from 'next/image'

// eslint-disable-next-line no-unused-vars
const myLoader = ({ src, width, quality }) => `${src}`;

export default function Card({body, title, wilburImage}) {
    return (
        <div className={`${cardStyles.container} ${cardStyles.dark}`}>
            <div className={cardStyles.cardTop}>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            <div className={cardStyles.image}>
                <div className={cardStyles.loader}></div>
                <Image
                    priority
                    src={wilburImage}
                    alt={"Picture of wilbur"}
                    layout={"fill"}
                    objectFit={"cover"}
                    className={cardStyles.image}
                    loader={myLoader}
                />
            </div>
            {/* <div className={cardStyles.image}>
                <Image
                    priority
                    src={"/images/wilbur-placeholder.png"}
                    alt={"Picture of wilbur"}
                    layout={"fill"}
                    objectFit={"cover"}
                    className={cardStyles.image}
                    placeholder={"blur"}
                    blurDataURL={"/images/wilbur-placeholder.png"}
                />
            </div> */}
        </div>
    )
}