import styles from './SignIn.module.scss';
import { Button } from '@mui/material';
import { FC } from "react"
import Field from '@/components/UI/Inputs/TextField/Field';
import { useForm, SubmitHandler } from 'react-hook-form'
import { ISignInForm } from '../IForm';
import { userService } from '@/services/userService/userService';


const SignIn: FC = () => {
    const { control, reset, register, handleSubmit, formState: { isValid, submitCount, errors } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            login: '',
            password: '',
            repeatPassword: ''
        }
    })



    const submit: SubmitHandler<ISignInForm> = (data) => {


        try {
            userService.registration(data)
        } catch (err) {
            console.log(err);
        }
    }

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
                    rules={{
                        minLength: { value: 3, message: 'gtrfegtrw' }
                    }}
                />

                <Field
                    errors={errors?.password?.message}
                    placeholder='Введите пароль'
                    name='password'
                    register={register}
                    size='medium'
                    type='text'
                    rules={{}}
                />

                <Field
                    errors={errors?.repeatPassword?.message}
                    placeholder='Повторите пароль'
                    name='repeatPassword'
                    register={register}
                    size='medium'
                    type='text'
                    rules={{}}
                />

                <Button
                    disabled={!isValid}
                    type='submit'
                    color='success'
                    variant='contained'
                >
                    submit
                </Button>
            </form>
        </div>
    )
};

export default SignIn;
