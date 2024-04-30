import ModelLoading from '@/components/ModelLoading';
import style from './main.module.scss';
import { Suspense } from 'react';

export const PageMain = () => {
    return (
        <main className={style.main}>
            <Suspense fallback={<ModelLoading />}>

            </Suspense>
        </main>
    )
};