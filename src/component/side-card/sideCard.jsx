import styles from './sideCard.module.css';


export function SideCard({iconOne,iconTwo, iconThree, iconFour, textOne,textTwo,textThree,textFour, light}) {
    return (
        <>
        <div className={`${styles.sideCard} ${light ? styles.dark : styles.light}`}>
            <div className={styles.content}>
                {iconOne}
                <p>{textOne}</p>
            </div>
            <div className={styles.content}>
                {iconTwo}
                <p>{textTwo}</p>
            </div>
            <div className={styles.content}>
                {iconThree}
                <p>{textThree}</p>
            </div>
            <div className={styles.content}>
                {iconFour}
                <p>{textFour}</p>
            </div>
        </div>
        </>
    )
}