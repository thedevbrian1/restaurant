import { Link, NavLink } from "@remix-run/react";
import { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuIcon, XIcon } from "./Icon";
import { navLinks, useDimensions } from "~/utils";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const listItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};
export default function Nav() {
    const [isMenuShowing, setIsMenuShowing] = useState(false);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    function toggleMenu() {
        setIsMenuShowing(!isMenuShowing);
    }

    return (
        <nav>
            {/* Desktop menu */}
            <div className="hidden lg:flex gap-8 items-center">
                <ul className="flex gap-6">
                    {navLinks.map(item => (
                        <li key={item.id}>
                            <NavLink
                                to={item.path}
                                prefetch="intent"
                                className={({ isActive }) => isActive ? 'text-white underline' : ''}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-4">
                    <Link to="/" className="px-6 py-2 rounded-lg bg-white text-black">
                        Reserve a Table
                    </Link>
                    <Link to="/" className="px-6 py-2 border border-white text-white rounded-lg">
                        Order Here
                    </Link>
                </div>
            </div>

            {/* Mobile menu */}
            {/* <div className="lg:hidden relative">
                <MenuIcon toggleMenu={toggleMenu} />
                {
                    isMenuShowing && (
                        <div className='flex flex-col justify-center items-center bg-black opacity-90 w-full h-screen fixed z-10 top-0 left-0 transition duration-500 ease-in-out'>
                            <XIcon
                                className='w-6 h-6 absolute top-6 right-6 cursor-pointer text-white'
                                onClick={() => setIsMenuShowing(false)}
                            />
                            <ul className='list-none text-center mr-4 text-white'>
                                {navLinks.map((item) => (
                                    <li
                                        className='text-xl'
                                        key={item.id}
                                        onClick={() => setIsMenuShowing(false)}
                                    >
                                        <NavLink
                                            to={item.path}
                                            prefetch='intent'
                                            className={({ isActive }) => isActive ? 'underline' : ''}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>

                                ))}

                            </ul>
                        </div>
                    )
                }
            </div> */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className="lg:hidden absolute top-0 left-0 w-[300px] h-[50vh]"

            >
                <motion.div
                    className="absolute top-0 left-0 w-[300px] bg-a11y-2 h-[50vh]"
                    variants={sidebar}
                />
                <ul className="p-[25px] absolute top-[100px]">
                    {/* {
                        ['Home', 'Menu', 'Events', 'Hours & Location', 'Contact'].map((item, index) => (<motion.li
                            key={index}
                            variants={listItemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-a11y-1 mb-4 flex items-center"
                        >
                            {item}
                        </motion.li>))
                    } */}
                    {navLinks.map((item) => (
                        <motion.li
                            variants={listItemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            key={item.id}
                            className='text-a11y-1 mb-4 flex items-center'
                        // onClick={() => setIsMenuShowing(false)}
                        >
                            <NavLink
                                to={item.path}
                                prefetch='intent'
                                className={({ isActive }) => isActive ? 'underline' : ''}
                            >
                                {item.name}
                            </NavLink>
                        </motion.li>

                    ))}

                </ul>
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.div>
        </nav>
    );
}

function MenuToggle({ toggle }) {
    return (
        <button onClick={toggle} className="outline-none border-none cursor-pointer absolute top-[18px] left-[28px] w-[50px] h-[50px] rounded-full bg-transparent">
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
    );
}

function Path(props) {
    return (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(316, 100%, 15%)"
            strokeLinecap="round"
            {...props}
        />
    );
}

function MenuItem() {

}