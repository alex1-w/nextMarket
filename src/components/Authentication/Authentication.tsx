'use client'
import styles from './Authentication.module.scss';
import { FC, useState } from "react"
import Login from './Login/Login';
import SignIn from './SignIn/SignIn';

type Variant = 'login' | 'signin'

const Authentication: FC = () => {
    const [variant, setVariant] = useState<Variant>('login')

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>

                <h1>Аутентификация</h1>

                <div className={styles.variantBlock}>
                    
                    <div onClick={()=> setVariant('login')}>
                        <p>Вход</p>
                    </div>

                    <div onClick={() => setVariant('signin')}>
                        <p>Регистрация</p>
                    </div>
                </div>


                <div>

                    {variant === 'login'
                        ?
                        <Login />
                        :
                        <SignIn />
                    }

                </div>

            </div>
        </div>
    )
};

export default Authentication;
