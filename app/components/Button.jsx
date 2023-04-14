import { Link } from "@remix-run/react";

export default function Button({ href, text, type }) {
    return (
        <Link to={href} className={`px-6 py-2 rounded-lg ${type === 'solid' ? 'bg-white text-black hover:bg-a11y-2' : type === 'outline' ? 'border border-white text-white hover:border-a11y-2 hover:text-a11y-2' : ''}   transition ease-in-out duration-300`}>
            {text}
        </Link>
    );
}