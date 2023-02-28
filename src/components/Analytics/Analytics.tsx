import styles from './styles.module.css'

export default function Analytics() {
    return (
        <div>
            <div className={styles.headingContainer}>
                <div className={styles.rightSide}>
                    <div className={styles.rowRightSide}>
                        <div className={styles.square}></div>
                        <h1>CRUD Project</h1>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.subLine}></div>
                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <div className={styles.tagSquare}></div>
                                <p className={styles.tagDes}>api</p>
                            </div>
                            <span className={styles.dividerLine}></span>
                            <div className={styles.tag}>
                                <div className={styles.tagSquare}></div>
                                <p className={styles.tagDes}>ios</p>
                            </div>
                            <span className={styles.dividerLine}></span>
                            <div className={styles.tag}>
                                <div className={styles.tagSquare}></div>
                                <p className={styles.tagDes}>Website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.leftSide}>
                    <h1>Feb 26, 2023</h1>
                </div>
            </div>
            <div className={styles.hrContainer}>
                <div className={styles.hr}></div>
            </div>
            <div className={styles.deadlineCenterContainer}>
                <div className={styles.deadlineContainer}>
                    <p>Should’ve been done on March 1, 2023!</p>
                </div>
            </div>
        </div>
    )
}