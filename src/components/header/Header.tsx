import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <a href='/' className={styles.logo}>Busyboard</a>
            <ul className={styles.menu_list}>
                <li className={styles.list_el}>Дашборд</li>
                <li className={styles.list_el}>Аналитика</li>
                <li className={styles.list_el}>Финансы</li>
                <li className={styles.list_el}>Автоматизация</li>
            </ul>
            <div className={styles.user_container}>
                <p className={styles.user_name}>User name</p>
                <div className={styles.user_logo}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21C20 17.517 16.4144 14.7 12 14.7C7.58556 14.7 4 17.517 4 21M12 12C13.235 12 14.4194 11.5259 15.2927 10.682C16.166 9.83807 16.6566 8.69347 16.6566 7.5C16.6566 6.30653 16.166 5.16193 15.2927 4.31802C14.4194 3.47411 13.235 3 12 3C10.765 3 9.58058 3.47411 8.7073 4.31802C7.83402 5.16193 7.34342 6.30653 7.34342 7.5C7.34342 8.69347 7.83402 9.83807 8.7073 10.682C9.58058 11.5259 10.765 12 12 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
            </div>
        </div>
    )
}

export default Header
