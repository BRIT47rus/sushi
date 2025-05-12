import { MealList } from './MealList';
import PromoText from './PromoText';

export const Meals = () => {
    return (
        <>
            <PromoText />
            <section>
                <ul>
                    <MealList />
                </ul>
            </section>
        </>
    );
};
