import styles from './ProductItem.module.scss';
import Image from 'next/image';
import { FC } from "react"
import ProductItemCounter from './ProductItemCounter/ProductItemCounter';

const ProductItem: FC = () => {

    return (
        <div className={styles.main}>
            <div className={styles.imgBlock}>
                <Image alt='fs' src='http://www.a-yabloko.ru/storage/catalog/goods/.thumbs/942dd6b46f560a8b118d37bfae28655e_w800.jpg' fill />
            </div>

            <div className={styles.description}>

                <div>
                    <p className={styles.description__price}>120p</p>
                    <p className={styles.description__title}>чипсы</p>
                </div>

                <p className={styles.description__weight}>140г</p>

            </div>

            <ProductItemCounter />
        </div>
    )
};

export default ProductItem;
