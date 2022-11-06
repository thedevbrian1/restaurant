import { Form, Link, Outlet, useCatch, useLoaderData, useTransition } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { VisuallyHidden } from "@reach/visually-hidden";
import dialogStyles from "@reach/dialog/styles.css";
import { getEvent } from "~/models/event";
import { getSession, sessionStorage } from "../../session.server";

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: dialogStyles
        }
    ];
}

export async function loader({ params }) {
    const slug = params.slug;
    const event = await getEvent(slug);
    return event.result;
}

export async function action({ request }) {
    const formData = await request.formData();
    const eventId = formData.get('eventId');
    console.log({ eventId });

    const session = await getSession(request);
    session.set("eventId", eventId);

    return redirect('/events/reserve', {
        headers: {
            "Set-Cookie": await sessionStorage.commitSession(session)
        }
    });
}

export default function EventSlug() {
    const data = useLoaderData();
    console.log({ data });
    const transition = useTransition();
    const [showDialog, setShowDialog] = useState(false);

    function open() {
        setShowDialog(true);
    }

    function close() {
        setShowDialog(false);
    }
    return (
        <main className=" bg-a11y-1 text-a11y-2">
            <div className="w-4/5 lg:max-w-6xl mx-auto space-y-5 py-10">


                <h1 className="font-semibold font-heading text-4xl mt-5 lg:mt-10">{data[0].name}</h1>
                <div className="w-full h-96">
                    {/* <img
                    src="https://images.unsplash.com/photo-1606874687375-9f7bcc517975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="A lady holding a mic infront of a small audience singing"
                    className="w-full h-full object-cover"
                /> */}
                    <img
                        src={data[0].image.image.asset.url}
                        alt={data[0].image.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="grid lg:grid-cols-7 lg:gap-x-12">
                    <p className="lg:col-span-5">{data[0].body.children.text}</p>
                    <div className="lg:col-span-2 m-5 lg:m-0 text-a11y-1 bg-a11y-2 h-40 rounded-lg px-3 py-3 flex flex-col items-center justify-center gap-y-2">
                        <h2 className="font-semibold ">Reserve a table for this event</h2>
                        <Form method="post">
                            <input type="hidden" name="eventId" value={data[0]._id} />
                            <button type="submit" className="px-6 py-2 rounded-lg bg-white text-black">
                                {transition.submission ? 'Please wait...' : 'Reserve'}
                            </button>
                        </Form>
                        {/* <Link to="reserve" className="px-6 py-2 rounded-lg bg-white text-black">
                        Reserve
                    </Link> */}
                    </div>
                </div>
                {/* <Dialog isOpen={showDialog} onDismiss={handleExternalClick}>
            <button className="close-button" onClick={close}>
                <VisuallyHidden>Close</VisuallyHidden>
                <span aria-hidden>×</span>
            </button>
            <div className="space-y-3">
                <h1 className="text-black font-semibold text-xl">Reserve table for event</h1>
                <p className="text-gray-800">
                    Fill in the form below to reserve your table. We will reach out to you with the details you have provided.
                </p>
                <Form method="post">
                    <fieldset className="text-gray-800 grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name">Full name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="px-3 py-2 w-72 rounded-lg block"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone number</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="0712345678"
                                className="px-3 py-2 w-72 rounded-lg block"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                className="px-3 py-2 w-72 rounded-lg block"
                            />
                        </div>
                        <div>
                            <label htmlFor="quantity">Number of people</label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                placeholder="2"
                                className="px-3 py-2 w-72 rounded-lg block"
                            />
                        </div>
                        <button className="w-1/2 bg-gradient-to-r from-[#f46b45] to-[#eea849] px-6 py-2 rounded-lg text-black">
                            Reserve
                        </button>
                    </fieldset>
                </Form>
            </div>
            <p className="text-black">Hello there. I am a dialog</p>
        </Dialog> */}
            </div>
        </main>
    )
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