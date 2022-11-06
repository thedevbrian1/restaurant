import { Link, NavLink, Outlet } from "@remix-run/react";

export default function Menu() {
    const menuLinks = [
        {
            name: 'All',
            path: '/menu',
        },
        {
            name: 'Breakfast',
            path: 'breakfast',
        },
        {
            name: 'Brunch',
            path: 'brunch',
        },
        {
            name: 'Lunch',
            path: 'lunch',
        },
        {
            name: 'Beverages',
            path: 'beverages',
        },
        {
            name: 'Snacks',
            path: 'snacks',
        },
        {
            name: 'Dinner',
            path: 'dinner',
        }
    ];
    return (
        <main className=" text-a11y-2 bg-a11y-1">
            <section className="w-full h-[25vh]  grid place-items-center">
                {/* TODO: Idea: Make text dynamic(change to breakfast, brunch, lunch, dinner, snacks) */}
                <h1 className="font-bold text-4xl font-heading">
                    Our Menu
                </h1>
            </section>
            <section className="w-4/5 lg:max-w-6xl mx-auto py-10">
                <div className="grid gap-5">
                    <p className="text-center font-bold text-xl lg:text-2xl  font-heading">Have a look at what we have</p>
                    <ul className="max-w-xs lg:max-w-none scroll-smooth whitespace-nowrap flex flex-nowrap overflow-x-auto lg:overflow-x-hidden gap-3 lg:gap-5 px-2 lg:px-10 mx-auto  uppercase lg:text-lg font-text text-white">
                        {menuLinks.map((menuLink, index) => (
                            <li key={index}>
                                <NavLink
                                    to={menuLink.path}
                                    className={({ isActive }) => isActive ? 'underline text-a11y-2 font-semibold' : ''}
                                    end
                                >
                                    {menuLink.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    {/* <select name="menu" id="menu-filter">
                        {menuLinks.map((menuLink, index) => (
                            <option value={menuLink.name} key={index}>
                                <Link to={menuLink.path}>
                                    {menuLink.name}
                                </Link>
                            </option>
                        ))}
                    </select> */}
                </div>
                <Outlet />
            </section>
        </main>
    )
}