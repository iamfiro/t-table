import { Circles } from 'react-loader-spinner';
import style from './style.module.scss'

function ModelLoading() {
    return (
        <div className={style.container}>
            <Circles
                height="35"
                width="35"
                color="#a6a6a6"
                ariaLabel="circles-loading"
                visible={true}
            />
            <span className={style.text}>분자 구조를 불러오는 중입니다...</span>
        </div>
    );
}

export default ModelLoading;