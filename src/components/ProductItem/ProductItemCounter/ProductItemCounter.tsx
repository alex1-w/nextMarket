'use client'
import styles from './ProductItemCounter.module.scss';
import { minus, plus } from '@/components/icons/icons';
import { actions } from '@/store/basket/basket';
import { FC, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';

const ProductItemCounter: FC<{ product: IProduct }> = ({ product }) => {
    const [productsCount, setProductsCount] = useState<number>(0)

    const basket = useSelector((state: any) => state)
    // const b = basket.find((item: any) => item.product.id === product.id)
    // console.log(b);

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

                    <p>{basket.count}</p>
                    {/* <p>{productsCount}</p> */}

                    <button className={styles.counterBlock__item} onClick={addProduct}>
                        {plus}
                    </button>

                </div>
            }
        </div>

    )
};

export default ProductItemCounter;
