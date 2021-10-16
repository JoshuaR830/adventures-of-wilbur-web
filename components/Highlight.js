import highlightStyles from './highlight.module.css'
import Image from 'next/image'

export default function Highlight({body, title, wilburImage}) {
    return (
        <div className={`${highlightStyles.container} ${highlightStyles.dark}`}>
            <div className={highlightStyles.highlightLeft}>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            {console.log(wilburImage)}
            <div className={highlightStyles.highlightRight}>
                <Image
                    priority
                    src={wilburImage}
                    alt={"Picture of wilbur"}
                    layout={"fill"}
                    objectFit={"cover"}
                    className={highlightStyles.image}
                />
            </div>
        </div>
    )
}