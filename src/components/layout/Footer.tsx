import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <p>&copy; 2022 Todo o conteúdo deste site está publicado sob a licença da GovOne.</p>
        </div>
    )
}

export default Footer