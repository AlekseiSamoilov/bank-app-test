import { useState } from 'react'
import styles from './status.module.scss'

const Status = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = ['Все статьи', 'Разнесены', 'Неразнесены'];

    return (
        <div className={styles.container}>
            <div className={styles.slider}
                style={{
                    width: `${100 / items.length - 2}%`,
                    left: `${(100 / items.length) * activeIndex + 1}%`,
                }}
            />
            {items.map((item, index) => (
                <button
                    key={item}
                    onClick={() => setActiveIndex(index)}
                    className={`${styles.button} ${activeIndex === index ? styles.active : ''}`}>{item}</button>
            ))}
        </div>
    )
}

export default Status
