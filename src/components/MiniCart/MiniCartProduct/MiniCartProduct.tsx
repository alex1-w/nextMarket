import styles from './MiniCartProduct.module.scss';
import Image from 'next/image';
import { FC } from "react"
import { trashIcon } from '@/components/icons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@/store/basket/basket';

const MiniCartProduct: FC<IProduct> = ({ id, name, weight, price }) => {

    console.log(name, weight);
    const dispatch = useDispatch()

    const deleteProduct = (id: number, e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        dispatch(actions.deleteProduct(id))
    }


    return (
        <div className={styles.main} >

            <div className={styles.imgBlock}>
                <Image src='http://www.a-yabloko.ru/storage/catalog/goods/.thumbs/942dd6b46f560a8b118d37bfae28655e_w800.jpg' alt={name} fill />
            </div>

            <div className={styles.description}>
                <div>
                    <p>{name}</p>
                    <p>{price}руб.</p>
                </div>

                <div>
                    <p>{weight}г.</p>

                    <button onClick={(e) => deleteProduct(id, e)}>
                        {trashIcon}
                    </button>
                </div>
            </div>

        </div>
    )
};

export default MiniCartProduct;
