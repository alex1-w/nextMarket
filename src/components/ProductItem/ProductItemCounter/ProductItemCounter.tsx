'use client'
import styles from './ProductItemCounter.module.scss';
import { minus, plus } from '@/components/icons/icons';
import { actions } from '@/store/basket/basket';
import { FC, useState } from "react"
import { useDispatch } from 'react-redux';

const ProductItemCounter: FC<{ product: IProduct }> = ({ product }) => {
    const [productsCount, setProductsCount] = useState<number>(0)

    const dispatch = useDispatch()

    const addProduct = () => {
        setProductsCount(prev => prev + 1)
        dispatch(actions.addToBasket(product))
    }

    const reduceProduct = () => setProductsCount((prev) => prev - 1)

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

                    <p>{productsCount}</p>

                    <button className={styles.counterBlock__item} onClick={addProduct}>
                        {plus}
                    </button>

                </div>
            }
        </div>

    )
};

export default ProductItemCounter;
