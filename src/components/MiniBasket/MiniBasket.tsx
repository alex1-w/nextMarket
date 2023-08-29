import styles from './MiniBasket.module.scss'
import { basketIcon } from '../icons/icons'
import { useState } from 'react'
import Cart from './Cart/Cart'

export const MiniCart = () => {
    const [isBasket, setIsBasket] = useState<boolean>(false)

    const showBasket = () => setIsBasket(true)

    const closeBasket = () =>  setIsBasket(false) 

    return (

        <div className={styles.main}>
            <div className={styles.content} onClick={showBasket}>

                {!isBasket && basketIcon}
                {isBasket
                    &&
                    <Cart isBasket={isBasket} closeBasket={closeBasket} />
                }
            </div>
        </div>
    )
}
