import { ReactNode } from 'react';
import styles from './Container.module.css';

function Container({children, customClass}: {children: ReactNode, customClass?: string }) {
    return (
        <div className={customClass ? `${styles.container} ${styles[customClass]}` : styles.container }>
            {children}
        </div>
    )
}

export default Container