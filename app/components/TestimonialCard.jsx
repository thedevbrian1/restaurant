import { StarIcon } from "./Icon";

export default function TestimonialCard() {
    return (
        <div className="bg-a11y-2 text-a11y-1 max-w-sm rounded-lg grid gap-3 p-8">
            <div className="flex gap-2">
                {/* Avatar */}
                {/* <div className="w-20 h-20 rounded-full"> */}
                <img
                    src="/girl.png"
                    alt=""
                    // width="100%"
                    // height="100%"
                    className="w-14 lg:w-20 h-14 lg:h-20 rounded-full"
                />
                {/* </div> */}
                <div className="flex flex-col gap-1">
                    <p className="text-xl  font-heading">Jane Doe</p>
                    <p className=" text-sm">Oct 2020 via Facebook</p>
                </div>
                {/* Logo */}
                <img
                    src="/facebook.svg"
                    alt=""
                    className="ml-3 w-8 h-8"
                />
            </div>
            {/* Star ratings */}
            <div className="">
                <StarIcon className="w-5 h-5 text-[#FFD700]" />
            </div>
            {/* Text */}
            <p className="">We'd love to show you what your reviews look like when you take advantage of the multiple platforms...</p>
        </div>
    )
}