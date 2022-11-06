import { ArrowRightIcon } from "./Icon";
import { Link } from "@remix-run/react";

export default function MenuCard({ bgImageUrl, title }) {
    //TODO: Animate icons on hover
    // Fill heart with different color then pop into the air a small heart then disappear(small heart)
    // Tilt microphone slightly
    // Vibrate the music icon
    // Fill flame with a different color
    return (
        <div className="aspect-w-1 aspect-h-1">
            <div style={{ backgroundImage: `url(${bgImageUrl})` }} className={` bg-black  bg-center bg-no-repeat bg-cover bg-blend-overlay bg-opacity-50 text-white rounded-lg`}>
                <div className="relative w-full h-full">
                    <div className="absolute bottom-10 left-7 grid gap-1">
                        <h2 className="font-semibold text-xl lg:text-2xl font-heading">{title}</h2>
                        <Link to="/" className="flex items-center gap-1">
                            View Menu <ArrowRightIcon className="w-5 h-5 inline" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}