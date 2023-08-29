import styles from './ProductItem.module.scss';
import Image from 'next/image';
import { FC } from "react"
import ProductItemCounter from './ProductItemCounter/ProductItemCounter';
import { useSelector } from 'react-redux';
import { priceFormatter } from '@/helpers/priceFormatter';

// interface IProductItem {
//     product: {
//         name: string,
//         weight: number,
//         id: number,
//         price: number,
//     }
//     count: number
// }

const ProductItem: FC<IFullProduct> = ({ count, id, name, price, weight }) => {

    return (
        <div className={styles.main}>
            <div className={styles.imgBlock}>
                <Image alt={name} src='http://www.a-yabloko.ru/storage/catalog/goods/.thumbs/942dd6b46f560a8b118d37bfae28655e_w800.jpg' fill />
            </div>

            <div className={styles.description}>

                <div>
                    <p className={styles.description__price}>{priceFormatter(price)}</p>
                    <p className={styles.description__title}>{name}</p>
                </div>

                <p className={styles.description__weight}>
                    {weight}г.
                </p>

            </div>

            <ProductItemCounter product={{ id, name, price, weight }} count={count} />
        </div>
    )
};

export default ProductItem;
