'use client'
import { MiniCart } from '@/components/MiniCart/MiniCart';
import styles from './HomePage.module.scss';
import ProductItem from '@/components/ProductItem/ProductItem';
import Sidebar from '@/components/Sidebar/Sidebar';
import Slider from '@/components/Slider/Slider';
import Image from 'next/image';
import { FC } from "react";

const slides = [ProductItem, ProductItem, ProductItem, ProductItem, ProductItem, ProductItem, ProductItem,]

const HomePage: FC = () => {
    return (
        <main className={styles.main}>

            <div className={styles.main__aside}>
                <Sidebar />
            </div>``

            <div className={styles.main__slidesBlock}>
                <Slider slides={slides} />
            </div>

            <MiniCart />

        </main>
    )
};

export default HomePage;
