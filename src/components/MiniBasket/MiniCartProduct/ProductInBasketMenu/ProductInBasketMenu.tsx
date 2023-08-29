import styles from './ProductInBasketMenu.module.scss'
import { minus, plus, trashIcon } from '@/components/icons/icons'
import { useDispatch } from 'react-redux'
import { actions } from '@/store/basket/basket'
import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const ProductInBasketMenu: FC<{ id: number, isMenu: boolean }> = ({ id, isMenu }) => {

    const dispatch = useDispatch()
    const deleteProduct = (id: number) => dispatch(actions.deleteProduct(id))


    const addProduct = () => {
        // dispatch(actions.addToBasket(product))
    }

    const reduceProduct = () => {
        // dispatch(actions.reduceProductBasket(product))
    }

    return (

        <AnimatePresence>
            {
                isMenu ?
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.main}
                    >
                        <div>
                            <button>
                                {minus}
                            </button>

                            <button>
                                {plus}
                            </button>

                            <button onClick={() => deleteProduct(id)}>
                                {trashIcon}
                            </button>

                        </div>
                    </motion.div>
                    :
                    <></>
            }

        </AnimatePresence>
    )
}
