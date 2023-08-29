import styles from './MiniCartProduct.module.scss';
import Image from 'next/image';
import { FC, useState } from "react"
import { changeIcon, trashIcon } from '@/components/icons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@/store/basket/basket';
import { priceFormatter } from '@/helpers/priceFormatter';
import { ProductInBasketMenu } from './ProductInBasketMenu/ProductInBasketMenu';
// import {PiArrowsCounterClockwiseFill} from ''

const MiniCartProduct: FC<IFullProduct> = ({ id, name, weight, price, count }) => {
    const [isMenu, setIsMenu] = useState<boolean>(false)

    const showMenu = () => setIsMenu(true)
    const hideMenu = () => setIsMenu(false)


    return (
        <div className={styles.main} >

            <div className={styles.imgBlock}>
                <Image src='http://www.a-yabloko.ru/storage/catalog/goods/.thumbs/942dd6b46f560a8b118d37bfae28655e_w800.jpg' alt={name} fill />
            </div>

            <div className={styles.description}>

                <div>
                    <p>{name}</p>

                    <div>
                        <p>{priceFormatter(price)}</p>
                        <p>{count}шт.</p>
                    </div>
                </div>


                <div>
                    <p>{weight}г.</p>

                    <div
                        className={styles.menu}
                        onMouseEnter={showMenu}
                        onMouseLeave={hideMenu}
                    >
                        {changeIcon}

                        {isMenu && <ProductInBasketMenu id={id} isMenu={isMenu} />}
                    </div>


                </div>
            </div>

        </div>
    )
};

export default MiniCartProduct;
