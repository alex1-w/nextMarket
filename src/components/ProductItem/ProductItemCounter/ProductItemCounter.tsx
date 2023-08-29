'use client'
import styles from './ProductItemCounter.module.scss';
import { minus, plus } from '@/components/icons/icons';
import { actions } from '@/store/basket/basket';
import { FC, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';

interface IProductItemCounter {
    product: IProduct
    count: number
}


const ProductItemCounter: FC<IProductItemCounter> = ({ product, count }) => {
    const [productsCount, setProductsCount] = useState<number>(count)

    const dispatch = useDispatch()

    const addProduct = () => {
        setProductsCount(prev => prev + 1)
        dispatch(actions.addToBasket(product))
    }

    const reduceProduct = () => {
        setProductsCount((prev) => prev - 1)
        dispatch(actions.reduceProductBasket(product))
    }

    return (

        <div className={styles.main} >
            {productsCount === 0
                ?
                <button className={styles.main__initialStateBlock} onClick={addProduct}>
                    {plus}
                </button>
                :
                <div className={styles.counterBlock}>

                    <button className={styles.counterBlock__item} onClick={reduceProduct}>
                        {minus}
                    </button>

                    {/* <p>{productsCount}</p> */}
                    <p>{count}</p>

                    <button className={styles.counterBlock__item} onClick={addProduct}>
                        {plus}
                    </button>

                </div>
            }
        </div>

    )
};

export default ProductItemCounter;
