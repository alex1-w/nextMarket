import styles from './HomePage.module.scss';
import ProductItem from '@/components/ProductItem/ProductItem';
import Sidebar from '@/components/Sidebar/Sidebar';
import Image from 'next/image';
import { FC } from "react"

const HomePage: FC = () => {
    return (
        <main className={styles.main}>
          <div className={styles.main__aside}>  <Sidebar /></div>
            <ProductItem />
        </main>
    )
};

export default HomePage;
