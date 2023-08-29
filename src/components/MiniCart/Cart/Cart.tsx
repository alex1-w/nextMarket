import styles from './Cart.module.scss';
import { Box, Typography } from '@mui/material';
import { FC } from "react"
import { useSelector } from 'react-redux';
import MiniCartProduct from '../MiniCartProduct/MiniCartProduct';
import { AnimatePresence, motion } from 'framer-motion';
import { basketIcon } from '@/components/icons/icons';

const Cart: FC<{ isCart: boolean }> = ({ isCart }) => {

    const basket = useSelector((state: any) => state)

    console.log(basket);


    return (
        <AnimatePresence>

            {isCart
                &&
                <motion.div
                    className={styles.main}
                    initial={{ y: '1000px' }}
                    animate={{ y: 0 }}
                    exit={{ y: '1000px' }}
                    transition={{ type: "spring", stiffness: 140, bounce: 0, damping: 18 }}
                >
                    <h3>Корзина</h3>

                    <div className={styles.productBlock}>
                        {basket.map((product: any) => (
                            <MiniCartProduct
                                id={product.product.id}
                                name={product.product.name}
                                weight={product.product.weight}
                                key={product.product.id}
                                price={product.product.price}
                            />
                        ))}
                    </div>

                    <div className={styles.basketBlock}>
                        {basketIcon}
                    </div>

                </motion.div>}
        </AnimatePresence>
    )
};

export default Cart;
