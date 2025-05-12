import CartIcon from '../Cart/CartIcon';
import cls from './HeaderCartButton.module.css';

export const HeaderCartButton = () => {
    return (
        <button className={cls.button}>
            <span className={cls.icon}>
                <CartIcon />
            </span>

            <span>Корзина</span>
            <span className={cls.badge}>2</span>
        </button>
    );
};
