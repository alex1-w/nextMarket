'use client'
import styles from './ProductItemCounter.module.scss';
import { minus, plus } from '@/components/icons/icons';
import { FC, useState } from "react"

const ProductItemCounter: FC = () => {

    const [productsCount, setProductsCount] = useState<number>(0)

    const addProduct = () => setProductsCount((prev) => prev + 1)
    const reduceProduct = () => setProductsCount((prev) => prev - 1)

    return (

        <div className={styles.main} >


            {productsCount === 0
                ?
                <div className={styles.main__initialStateBlock} onClick={addProduct}>
                    {plus}
                </div>
                :
                <div className={styles.counterBlock}>

                    <div className={styles.counterBlock__item} onClick={reduceProduct}>
                        {minus}
                    </div>

                    <p>{productsCount}</p>

                    <div className={styles.counterBlock__item} onClick={addProduct}>
                        {plus}
                    </div>

                </div>
            }


        </div>

    )
};

export default ProductItemCounter;
