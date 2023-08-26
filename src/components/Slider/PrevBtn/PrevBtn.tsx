import { arrowIcon } from '@/components/icons/icons';
import styles from './PrevBtn.module.scss';
import { FC } from "react"

const PrevBtn: FC = () => {
    return (
        <div>
            <p>
                {arrowIcon}
            </p>
        </div>
    )
};

export default PrevBtn;
