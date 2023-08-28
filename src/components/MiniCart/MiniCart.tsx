import styles from './MiniCart.module.scss'
import { basketIcon } from '../icons/icons'
import { useState } from 'react'
import Cart from './Cart/Cart'

export const MiniCart = () => {
    const [isCart, setIsCart] = useState<boolean>(false)
    const showCart = () => setIsCart(!isCart)

    return (
        <div className={styles.main}>

            <div className={styles.content} onClick={showCart}>
                {basketIcon}
                
                {isCart
                    &&
                    <Cart />
                }
            </div>

        </div>
    )
}
