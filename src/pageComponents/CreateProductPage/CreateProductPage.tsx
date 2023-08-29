'use client'
import Form from '@/components/Form/Form';
import styles from './CreateProductPage.module.scss';
import Field from '@/components/UI/Inputs/TextField/Field';
import { FC } from "react"
import { useForm } from 'react-hook-form';

const CreateProductPage: FC = () => {

    const { register, control, reset, handleSubmit, formState: { errors, isValid, submitCount } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            title: '',
            price: 0,
            description: '',
            image: '',
            brand: ''
        }
    })

    const submit = (body: any) => {
        console.log(body);
    }

    return (
        <main className={styles.main}>


            <div className={styles.wrapper}>

                <div className={styles.leftPart} />

                <Form handleSubmit={handleSubmit} isValid={isValid} submit={submit} submitCount={submitCount} >

                    <Field type='text' errors={errors?.title?.message} name='title' register={register} rules={{}} size='medium' />
                    <Field type='text' errors={errors?.description?.message} name='description' register={register} rules={{}} size='medium' />
                    <Field type='text' errors={errors?.image?.message} name='image' register={register} rules={{}} size='medium' />
                    <Field type='number' errors={errors?.price?.message} name='price' register={register} rules={{}} size='medium' />
              
                </Form>

            </div>


        </main>
    )
};

export default CreateProductPage;
