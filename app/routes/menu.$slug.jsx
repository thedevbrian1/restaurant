import { useCatch, useLoaderData, useParams } from "@remix-run/react";
import MenuItem from "~/components/MenuItem";

export async function loader({ params }) {
    const slug = params.slug;

    const breakfast = [
        {
            name: 'Spanish omelette',
            price: '750',
            description: 'Fresh green peppers, tomatoes & onions',
        },
        {
            name: 'Chicken fajita omelette',
            price: '750',
            description: 'Spiced fajita chicken, onions, fresh green peppers, tomatoes & cheddar cheese.',
        },
        {
            name: 'Vegetable spring rolls',
            price: '290',
            description: 'Vegetable spring rolls',
        },
        {
            name: 'Vegetable samosas',
            price: '280',
            description: 'Vegetable samosas',
        },
        {
            name: 'Almond croissant',
            price: '290',
            description: 'Almond croissant',
        },
        {
            name: 'Strawberry banana pancake',
            price: '750',
            description: 'Strawberry banana pancake',
        },
        {
            name: 'Vanilla muffin',
            price: '280',
            description: 'Vanilla flavoured muffin',
        },
        {
            name: 'Chocolate chip muffin',
            price: '280',
            description: 'Chocolate flavoured muffin',
        },
    ];

    const brunch = [
        {
            name: 'Cinnamon rolls',
            price: '750',
            description: 'Fresh cinnamon rolls',
        },
        {
            name: 'Classic french toast',
            price: '650',
            description: 'Custardly, lighlty sweet and golden brown',
        },
        {
            name: 'Healthy banana bread',
            price: '430',
            description: 'Moist & nutty banana bread',
        },
        {
            name: 'Baked oatmeal with blueberries',
            price: '570',
            description: 'Soft baked oats and fruit',
        },
        {
            name: 'Spinach Artichoke pizza',
            price: '600',
            description: 'Spinach Artichoke pizza',
        },
        {
            name: 'Healthy egg salad',
            price: '630',
            description: 'Healthy egg salad',
        },
        {
            name: 'Savory porridge',
            price: '400',
            description: 'White oat porridge with creative flavor combinations like butternut squash and ginger',
        },
        {
            name: 'Chocolate chip muffin',
            price: '280',
            description: 'Chocolate flavoured muffin',
        },
    ];

    const lunch = [
        {
            name: 'Stir fried chicken',
            price: '1850',
            description: 'Strips of tender juicy chicken breast served with caeser salad, spinach and plantain',
        },
        {
            name: 'Chicken wing meal',
            price: '1500',
            description: 'Marinated grilled chicken wings hand tossed in BBQ sauce with carrots, cucumber & dipping sauce. Served with your choice of side',
        },
        {
            name: 'Carribean jerk chicken',
            price: '1550',
            description: 'Chicken on bone, marinated Caribbean style and grilled to perfection, served with salsa, plantain, ranchero sauce and crispy garden salad'
        },
        {
            name: 'Grilled tilapia',
            price: '1800',
            description: 'Fresh Lake Victoria Tilapia fillet grilled to perfection served with creamy pili pili sauce',
        },
        {
            name: 'Fish fingers & chips',
            price: '1580',
            description: 'Small and long pieces of fish, crumb fried and served with tartar sauce',
        },
        {
            name: 'Beef steak',
            price: '1950',
            description: 'Tender and juicy beef fillet steak cooked to your preference. Served with crispy onion rings and choice of fries or mashed potatoes or rice',
        },
        {
            name: 'Mexican chicken pizza (medium)',
            price: '1200',
            description: 'Mozzarella cheese, tomato sauce, green pepper, onions, tomatoes, chicken and chili',
        },
        {
            name: 'Mexican chicken pizza (large)',
            price: '2100',
            description: 'Mozzarella cheese, tomato sauce, green pepper, onions, tomatoes, chicken and chili',
        },

    ];

    const beverages = [
        {
            name: 'Iced coffee',
            price: '200',
            description: 'Perfectly iced coffee',
        },
        {
            name: 'Espresso',
            price: '200',
            description: 'Espresso',
        },
        {
            name: 'English Tea',
            price: '350',
            description: 'Herbal teas come with a choice of pepper mint, chamomile, earlgrey, green tea, english breakfast & Holy Basil',
        },
        {
            name: 'Lemon tea',
            price: '350',
            description: 'Herbal teas come with a choice of pepper mint, chamomile, earlgrey, green tea, english breakfast & Holy Basil',
        },
        {
            name: 'Strawberry smoothie',
            price: '520',
            description: 'A fresh blend of yoghurt & strawberry',
        },
        {
            name: 'Tropical smoothie',
            price: '520',
            description: 'A fresh blend of yoghurt, mango, strawberry, paw paw & bananas',
        },
        {
            name: 'Peanut butter & chocolate milkshake',
            price: '520',
            description: 'Fresh peanut butter & chocolate milkshake',
        },
        {
            name: 'Mango juice',
            price: '450',
            description: 'Fresh blended mango juice',
        }
    ];

    switch (slug) {
        case 'breakfast':
            return breakfast;
        case 'brunch':
            return brunch;
        case 'lunch':
            return lunch;
        case 'beverages':
            return beverages;

        default:
            break;
    }
    // return null;
}

export default function Slug() {
    const data = useLoaderData();
    const { slug } = useParams();

    slug.charAt(0).toUpperCase() + slug.slice(1)
    return (
        <div className="py-4">

            <div className="grid lg:grid-cols-3">
                <div className="lg:col-span-2 grid lg:grid-cols-4">
                    <div className="bg-brand-green h-full hidden lg:grid lg:col-span-1 rounded-l-lg" />
                    <div className="lg:col-span-3 bg-light-gray py-10 px-5">
                        <h2 className="font-semibold text-2xl lg:text-3xl font-heading">
                            {slug.charAt(0).toUpperCase() + slug.slice(1)}
                        </h2>
                        <div className="flex flex-col gap-2 divide-y mt-3">
                            {data.map((meal, index) => (
                                <MenuItem menuItem={meal.name} price={meal.price} description={meal.description} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="aspect-w-4 aspect-h-2 lg:aspect-none w-full h-full">
                        <img
                            src="https://thatspicychick.com/wp-content/uploads/2021/01/Tortilla-Espanola-front-view-on-plate-with-sliced-wedge.jpg"
                            alt=""
                            className="object-cover w-full h-full rounded-r-lg"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export function CatchBoundary() {
    const caught = useCatch();
    return (
        <div>
            <h1 className="font-bold text-3xl text-black">Error!</h1>
            <p>Status: {caught.status}</p>
            <pre>
                <code>{caught.data}</code>
            </pre>
        </div>
    );
}

export function ErrorBoundary({ error }) {
    return (
        <div className="text-black">
            <h1 className="font-bold text-3xl">Error!</h1>
            <p>{error.message}</p>
            <p>The stack trace is:</p>
            <pre>{error.stack}</pre>
        </div>
    )
}