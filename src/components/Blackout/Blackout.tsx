import styles from './Blackout.module.scss';
import { FC } from "react"

const Blackout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.main}>

            <div className={styles.content}>
                {children}
            </div>

        </div>
    )
};

export default Blackout;
