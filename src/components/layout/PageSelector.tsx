import styles from './PageSelector.module.css';
import { useState } from 'react';

function PageSelector({page, setPage, numberOfPages} : {page: number | never, setPage: any, numberOfPages: number }) {
    
    const [pagesArray, setPagesArray] = useState<Array<number>>([1, 2, 3]);


    function onPageClick(e: any): void {
        const pag = parseInt(e.target.value);
        if (pag <= numberOfPages - 2) {
            setPagesArray([pag, pag + 1, pag + 2]);
        } else if (pag === numberOfPages -1) {
            setPagesArray([pag, pag + 1, -1])
        } else if (pag === numberOfPages) {
            setPagesArray([pag, -1, -1])
        }
        setPage(pag);
    }


    

    function classHandler(v: number): any {
        if (v != -1) {
            if (v === page) {
                return styles.selected
            } else {
                return styles.notSelected
            }
        } else {
            return styles.hiddenButton
        }
    }

    function arrowClassHandler(side: string): string {
        if (side === 'left') {
            if (page === 1) {
                return styles.disabledButton
            } else {
                return styles.arrowButton
            }
        } else if (side === 'right') {
            if (page === numberOfPages) {
                return styles.disabledButton
            } else {
                return styles.arrowButton
            }
        }
        return styles.arrowButton
    }

    function leftClickHandler() {
        if (page > 1) {
            if (page - 1 <= numberOfPages - 2) {
                setPagesArray([page - 1, page, page + 1]);
            } else if (page - 1 === numberOfPages -1) {
                setPagesArray([page - 1, page, -1])
            } 
        setPage(page - 1);
        }
    }

    function rightClickHandler() {
        if (page < numberOfPages) {
            if (page + 1 <= numberOfPages - 2) {
                setPagesArray([page + 1, page + 2, page + 3]);
            } else if (page + 1 === numberOfPages -1) {
                setPagesArray([page + 1, page + 2, -1])
            }
        setPage(page + 1);
        }
    }

    return (
        <div className={styles.pageSelectorContainer}>
            <button onClick={leftClickHandler} className={arrowClassHandler('left')}>
                <span className="material-symbols-outlined">
                    navigate_before
                </span>
            </button>
            <ul>
                {pagesArray.map((v, i) => (
                    <li key={i}><button className={classHandler(v)} value={v} onClick={onPageClick}>{v}</button></li>
                ))}
            </ul>
            <button onClick={rightClickHandler} className={arrowClassHandler('right')}>
                <span className="material-symbols-outlined">
                    navigate_next
                </span>
            </button>
        </div>
    )
}

export default PageSelector