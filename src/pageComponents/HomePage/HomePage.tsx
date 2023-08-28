'use client'
import { MiniCart } from '@/components/MiniCart/MiniCart';
import styles from './HomePage.module.scss';
import ProductItem from '@/components/ProductItem/ProductItem';
import Sidebar from '@/components/Sidebar/Sidebar';
import Slider from '@/components/Slider/Slider';
import Image from 'next/image';
import { FC } from "react";

const productData = [
    {
        name: 'чипсы сырные',
        wheit: 120,
        id: 1
    },
    {
        name: 'чипсы с луком',
        wheit: 140,
        id: 2
    },
    {
        name: 'чипсы с ребрышками',
        wheit: 100,
        id: 3
    },
    {
        name: 'чипсы со сметаной',
        wheit: 160,
        id: 4
    },
    {
        name: 'чипсы кукурузные',
        wheit: 100,
        id: 5
    },
    {
        name: 'чипсы сырные',
        wheit: 1000,
        id: 6
    },
    {
        name: 'чипсы крабовые',
        wheit: 120,
        id: 7
    },
    {
        name: 'чипсы',
        wheit: 120,
        id: 8
    },
]


const slides = [ProductItem, ProductItem, ProductItem, ProductItem, ProductItem, ProductItem, ProductItem]

const HomePage: FC = () => {


    return (
        <main className={styles.main}>

            <div className={styles.main__aside}>
                <Sidebar />
            </div>

            <div className={styles.main__slidesBlock}>
                <Slider slides={productData} />
            </div>

            <MiniCart />

        </main>
    )
};

export default HomePage;
