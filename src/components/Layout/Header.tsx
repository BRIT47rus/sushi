import cls from './Header.module.css';
import sushiJPG from '../assets/sushi.jpg';
export const Header = () => {
    return (
        <>
            <header className={cls.header}>
                <h1>Суши кухня</h1>
                <button>Корзина</button>
            </header>

            <div className={cls['main-image']}>
                <img src={sushiJPG} alt="Фото суши" />
            </div>
        </>
    );
};
