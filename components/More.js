import { useState } from 'react';
import Image from 'next/image';
import moreStyles from './More.module.scss'

const myLoader = ({ src, width, quality }) => {
    return `${src}`
}

export default function More({content, isVisible}) {
    const [visibility, setVisibility] = useState(isVisible)

    function handleChange() {
        setVisibility(!visibility)
    }

    return (
        <>
            <div onClick={() => handleChange()}>
                <div className={moreStyles.outer}>
                <div className={`${visibility?moreStyles.more:moreStyles.less} ${moreStyles.section}`}>{content}</div>
                <div>
                    <hr />
                </div>
                <div className={moreStyles.container}>
                        <div>{visibility?"Less":"More"}</div>
                        <Image
                            src={`/images/expand/${visibility?"less":"more"}.svg`}
                            width={24}
                            height={24}
                            loader={myLoader}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}