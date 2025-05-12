import cls from './MealList.module.css';
const dataMeals = [
    {
        id: 'm1',
        name: 'Суши с угрем',
        description: 'Угорь копченый , соус унаги, кунжут',
        price: 4.33,
    },
    {
        id: 'm2',
        name: 'Суши с угрем',
        description: 'Угорь копченый , соус унаги, кунжут',
        price: 3.33,
    },
    {
        id: 'm3',
        name: 'Суши с угрем',
        description: 'Угорь копченый , соус унаги, кунжут',
        price: 6.33,
    },
    {
        id: 'm4',
        name: 'Суши с угрем',
        description: 'Угорь копченый , соус унаги, кунжут',
        price: 7.33,
    },
];

export const MealList = () => {
    const mealList = dataMeals.map((meal) => <li>{meal.name}</li>);
    return (
        <section className={cls.meals}>
            <ul>{mealList}</ul>
        </section>
    );
};
