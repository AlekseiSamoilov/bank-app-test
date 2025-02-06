import React, { useState } from 'react'
import styles from './status.module.scss'

const Status = () => {
    return (
        <ul className={styles.container}>
            <li id='all' className={styles.li_el}>Все статьи</li>
            <li id='done' className={styles.li_el}>Разнесены</li>
            <li id='undone' className={styles.li_el}>Неразнесены</li>
        </ul>
    )
}

export default Status
