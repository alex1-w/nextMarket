import styles from './Cart.module.scss';
import { Box, Typography } from '@mui/material';
import { ChangeEvent, FC } from "react"
import { useDispatch, useSelector } from 'react-redux';
import MiniCartProduct from '../MiniCartProduct/MiniCartProduct';
import { AnimatePresence, motion } from 'framer-motion';
import { basketIcon } from '@/components/icons/icons';
import { AiOutlineClear } from "react-icons/ai";
import { actions } from '@/store/basket/basket';
import { useProductsInBasket } from '@/hooks/useProductsInBasket';

interface IBasket {
    isBasket: boolean,
    closeBasket: () => void
}

const Cart: FC<IBasket> = ({ isBasket, closeBasket }) => {
    const products = useProductsInBasket()

    const dispatch = useDispatch()
    const cleanBasket = () => dispatch(actions.cleanBasket())
    console.log(products);


    return (
        <AnimatePresence>

            {isBasket
                &&
                <motion.div
                    className={styles.main}
                    initial={{ y: '1000px' }}
                    animate={{ y: 0 }}
                    exit={{ y: '1000px' }}
                    transition={{ type: "spring", stiffness: 140, bounce: 0, damping: 18 }}
                >
                    <div className={styles.head}>
                        <h3>Корзина</h3>
                        <div onClick={() => cleanBasket()}>
                            <AiOutlineClear />
                        </div>
                    </div>

                    <div className={styles.productBlock}>
                        {products.map((product: any) => (
                            <MiniCartProduct
                                count={product.count}
                                id={product.product.id}
                                name={product.product.name}
                                weight={product.product.weight}
                                key={product.product.id}
                                price={product.product.price}
                            />
                        ))}
                    </div>

                    <div className={styles.basketBlock} onClick={closeBasket}>
                        {basketIcon}
                    </div>

                </motion.div>}
        </AnimatePresence>
    )
};

export default Cart;
