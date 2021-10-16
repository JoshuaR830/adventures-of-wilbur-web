import cardStyles from './card.module.css'
import Image from 'next/image'

export default function Card({body, title, wilburImage}) {
    return (
        <div className={cardStyles.container}>
            <div className={cardStyles.cardTop}>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            <div className={cardStyles.image}>
                <Image
                    priority
                    src={wilburImage}
                    alt={"Picture of wilbur"}
                    layout={"fill"}
                    objectFit={"cover"}
                    className={cardStyles.image}
                />
            </div>
        </div>
    )
}