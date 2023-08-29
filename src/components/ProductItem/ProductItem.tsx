import styles from './ProductItem.module.scss';
import Image from 'next/image';
import { FC } from "react"
import ProductItemCounter from './ProductItemCounter/ProductItemCounter';
import { useSelector } from 'react-redux';

interface IProductItem {
    product: {
        name: string,
        weight: number,
        id: number,
        price: number,
    }
}

const ProductItem: FC<IProductItem> = ({ product }) => {

    const basket = useSelector((state: any) => state)


    return (
        <div className={styles.main}>
            <div className={styles.imgBlock}>
                <Image alt={product.name} src='http://www.a-yabloko.ru/storage/catalog/goods/.thumbs/942dd6b46f560a8b118d37bfae28655e_w800.jpg' fill />
            </div>

            <div className={styles.description}>

                <div>
                    <p className={styles.description__price}>bjbjewf</p>
                    <p className={styles.description__title}>{product.name}</p>
                </div>

                <p className={styles.description__weight}>
                    {product.weight}г.
                </p>

            </div>

            <ProductItemCounter product={product} />
        </div>
    )
};

export default ProductItem;
