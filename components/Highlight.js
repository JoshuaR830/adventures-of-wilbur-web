import highlightStyles from './highlight.module.scss'
import Image from 'next/image'
import Dots from './dots'
import More from './More'

export default function Highlight({body, title, wilburImage}) {
    return (
        <>
            <div className={`${highlightStyles.container} ${highlightStyles.dark}`}>
                <div className={highlightStyles.highlightLeft}>
                    <h1 className={highlightStyles.title}>{title}</h1>
                    <p className={highlightStyles.description}>{body}</p>
                    <More content={body} isVisible={false}></More>
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
            <Dots></Dots> 
        </>
    )
}