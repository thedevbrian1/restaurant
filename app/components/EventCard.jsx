import { ArrowRightIcon } from "./Icon";
import { Link } from "@remix-run/react";

export default function EventCard({ image, title, description, day, date, time, slug }) {
    // const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    function getTruncatedMonth() {
        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
        return month.substring(0, 3);
    }

    // function getFormattedTime() {
    //     let values = time.split(':');
    //     let formattedTime = new Date().setHours(values[0]).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
    //     return formattedTime;
    // }
    return (
        <div className="grid lg:grid-cols-7 gap-7 lg:gap-5 items-center bg-a11y-2 text-a11y-1 lg:p-4 rounded-lg ">
            <div className="lg:col-span-2 aspect-w-4 aspect-h-3 w-auto lg:h-auto lg:aspect-w-1 lg:aspect-h-1">
                {/* <img
                    src="https://images.unsplash.com/photo-1606874687375-9f7bcc517975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="A lady holding a mic infront of a small audience singing"
                    className="w-full h-full object-cover"
                /> */}
                <img
                    src={image.image.asset.url}
                    alt={image.alt}
                    // width={400}
                    className="w-full h-full object-cover rounded-md m-4 lg:m-0"
                />
            </div>
            <div className="lg:col-span-5 px-4 lg:px-auto pb-4 lg:pb-auto">
                <h2 className="font-bold font-heading lg:text-lg">{title}</h2>
                <p className=" line-clamp-2">{description}</p>
                <p className=" mt-2">
                    {date
                        ? <time dateTime={date} className="font-semibold">
                            {getTruncatedMonth()} 22
                        </time>
                        : <span className="font-semibold">{day}</span>}
                    {/* <time dateTime={new Date().toISOString()}>
                        Oct 22
                    </time> */}

                    &nbsp;starting at&nbsp;
                    <time dateTime={time} className="font-semibold">
                        {/* {new Date().setHours(time).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })} */}
                        {time}
                        {/* {getFormattedTime()} */}
                    </time>
                </p>
                <div className="mt-3 lg:mt-8">
                    <Link
                        to={slug}
                        className="text-black underline hover:text-blue-500"
                        prefetch="intent"
                    >
                        View more <ArrowRightIcon />
                    </Link>
                </div>
            </div>
        </div>
    )
}