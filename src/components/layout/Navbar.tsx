import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.elementsContainer}>
                <div className={styles.titleContainer}>
                    <h1>Ultimas notícias</h1>
                    <p>Confira as últimas notícias do estado.</p>
                </div>
                <div className={styles.logoContainer}>
                <span className="material-symbols-outlined">
                    newspaper
                </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar