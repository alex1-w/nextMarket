'use client'
import styles from './Header.module.scss';
import Logo from '@/components/Logo/Logo';
import Field from '@/components/UI/Field/Field';
import { FC } from "react"
import UserBlock from './UserBlock/UserBlock';
import Link from 'next/link';
import { searchIcon } from '@/components/icons/icons';

const Header: FC = () => {
    const authenticate = () => console.log(534);


    return (
        <header className={styles.main}>

            <Field svgIcon={searchIcon} placeholder='Поиск...' />

            <div>
                <Logo />

            </div>
            <div onClick={authenticate} className={styles.userInterface}>
                {/* <UserBlock /> */}
                <Link href={'/authentication'}> <p>Войти</p></Link>
            </div>
        </header>
    )
};

export default Header;
