'use client'
import styles from './Login.module.scss';
import { Button } from '@mui/material';
import { FC } from "react"
import Field from '@/components/UI/Inputs/TextField/Field';
import { useForm, SubmitHandler } from 'react-hook-form'
import { ILoginForm } from '../IForm';
import { userService } from '@/services/userService/userService';
import { useMutation } from 'react-query'
import { enqueueSnackbar } from 'notistack';
// import { useRouter } from 'next/router';

const Login: FC = () => {

    // const navigate = useRouter()

    const { control, reset, register, handleSubmit, formState: { isValid, submitCount, errors } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            login: '',
            password: '',
        }
    })

    const { mutateAsync } = useMutation(
        ['authentication'],
        (body: ILoginForm) => userService.authentication(body),
        {
            onSuccess: () => {
                enqueueSnackbar('вы авторизавны', { variant: 'success' })
                // navigate.push('/')
            }
        }
    )

    const submit: SubmitHandler<ILoginForm> = (data) => mutateAsync(data)

    return (
        <div className={styles.main}>


            <form noValidate onSubmit={handleSubmit(submit)}>

                <Field
                    errors={errors?.login?.message}
                    placeholder='Введите логин'
                    name='login'
                    register={register}
                    size='medium'
                    type='text'
                    rules={{}}
                />

                <Field
                    errors={errors?.login?.message}
                    placeholder='Введите пароль'
                    name='password'
                    register={register}
                    size='medium'
                    type='text'
                    rules={{}}
                />

                <Button type='submit' color='success' variant='contained'>submit</Button>
            </form>
        </div>
    )
};

export default Login;
