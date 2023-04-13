import { useCatch, useLoaderData, useTransition } from "@remix-run/react";
import EventCard from "~/components/EventCard";
import { getWeeklyEvents } from "~/models/event";

export async function loader() {
    const weeklyEvents = await getWeeklyEvents();
    // console.log({ weeklyEvents });
    return weeklyEvents.result;
}
export default function Events() {
    // TODO: Schedule an event in one's calendar
    // TODO: Animate gradient

    const data = useLoaderData();
    const transition = useTransition();

    // console.log({ data });
    const events = [
        {
            title: 'Karaoke',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae ratione optio animi perspiciatis inventore.',
            day: 'Thursdays',
            date: '',
            time: '22:00'
        },
        {
            title: 'Valentine\'s',
            description: 'Celebrate the day of love',
            day: '',
            date: new Date(2022, 1, 14),
            time: '18:00'
        },
        {
            title: 'Deejay showdown',
            description: 'Enjoy the battles of our best djs',
            day: 'Tuesdays',
            date: '',
            time: '21:00'
        },
        {
            title: 'Mugithi',
            description: 'Celebrate our culture',
            day: 'Saturdays',
            date: '',
            time: '22:00'
        }
    ];

    return (
        <main className={`${transition.state === 'loading' ? 'opacity-50' : ''} bg-a11y-1 text-a11y-2`}>
            <section className="w-full h-[25vh] bg-a11y-1 text-a11y-2 grid place-items-center">
                <h1 className="font-bold font-heading text-4xl">
                    Events
                </h1>
            </section>
            <section className="w-4/5 lg:max-w-4xl mx-auto space-y-5 py-10">
                <h2 className="text-xl lg:text-2xl font-semibold font-heading">Weekly events</h2>
                {data.map((event) => (
                    <EventCard
                        key={event._id}
                        image={event.image}
                        title={event.name}
                        description={event.body.children.text}
                        day={event.day}
                        // date={event.date}
                        time={event.startTime}
                        slug={event.slug.current}
                    />
                ))}

            </section>
            <section className="w-4/5 lg:max-w-5xl mx-auto space-y-5 py-4 lg:py-12">
                <h2 className=" text-xl lg:text-2xl font-semibold font-heading">Special events</h2>
                {/* <EventCard />
                <EventCard />
                <EventCard />
                <EventCard /> */}
            </section>
            {/* <section className="h-screen w-full bg-green-500 grid place-items-center">
                <h1 className="font-bold text-xl text-white">
                    Section Two
                </h1>
            </section>
            <div className="h-[200vh]">
                <section className="h-screen w-full sticky top-0 bg-blue-500 grid place-items-center">
                    <h1 className="font-bold text-xl text-white">
                        Section Three
                    </h1>
                </section>
            </div>
            <section className="h-screen w-full mt-[-100vh] relative bg-orange-500 grid place-items-center">
                <h1 className="font-bold text-xl text-white">
                    Section Four
                </h1>
            </section>
            <section className="h-screen w-full bg-indigo-500 grid place-items-center">
                <h1 className="font-bold text-xl text-white">
                    Section Five
                </h1>
            </section> */}
        </main>
    );
}

export function CatchBoundary() {
    const caught = useCatch();

    return (
        <div>
            <h1 className="font-bold text-3xl">Error!</h1>
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