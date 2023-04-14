import { json, redirect } from "@remix-run/node";
import { Form, isRouteErrorResponse, useActionData, useCatch, useLoaderData, useRouteError, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { getEventImageAndName } from "~/models/event";
import { getSession, sessionStorage } from "~/session.server";
import { validateName, validatePhone, validateEmail, validateCapacity, badRequest } from "../utils";

export async function loader({ request }) {
    const session = await getSession(request);
    const eventId = session.get("eventId");
    const eventDetails = await getEventImageAndName(eventId);

    return json(eventDetails.result, {
        // headers: {
        //     "Set-Cookie": await sessionStorage.commitSession(session)
        // }
    });
}

export async function action({ request }) {
    const formData = await request.formData();
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const capacity = formData.get('capacity');

    // const fields = { name, phone, email, capacity };
    const fieldErrors = {
        name: validateName(name),
        phone: validatePhone(phone),
        email: validateEmail(email),
        capacity: validateCapacity(capacity)
    };

    // Return errors if any
    if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({ fieldErrors });
    }
    return redirect('/success');
}
export default function EventReserve() {
    const data = useLoaderData();
    console.log({ data });
    const actionData = useActionData();
    const transition = useTransition();

    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const capacityRef = useRef(null);

    useEffect(() => {
        nameRef.current?.focus();

        if (actionData?.fieldErrors.name) {
            nameRef.current?.focus();
        } else if (actionData?.fieldErrors.phone) {
            phoneRef.current?.focus();
        } else if (actionData?.fieldErrors.email) {
            emailRef.current?.focus();
        } else if (actionData?.fieldErrors.capacity) {
            capacityRef.current?.focus();
        }
    }, [actionData]);

    // TODO: Use the event's image as background image
    return (
        <main
            className={`min-h-screen bg-black bg-no-repeat bg-cover bg-center bg-blend-overlay bg-opacity-70`}
            style={{ backgroundImage: `url(${data[0].image.image.asset.url})` }}
        >
            <div className="w-4/5 lg:max-w-5xl min-h-screen mx-auto grid place-items-center text-white backdrop-filter backdrop-saturate-50">
                <div className="space-y-3">
                    <h1 className=" font-semibold text-xl font-heading">Reserve table for {data[0].name} event</h1>
                    <p className="">
                        Fill in the form below to reserve your table. We will reach out to you with the details you have provided.
                    </p>
                    <Form replace method="post" className="lg:max-w-[700px]">
                        <fieldset className="text-white grid lg:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name">Full name</label>
                                <input
                                    ref={nameRef}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    className={`w-full rounded-lg block ${actionData?.fieldErrors.name ? 'border-red-700' : ''}`}
                                />
                                {
                                    actionData?.fieldErrors.name
                                        ? (<span className="pt-1 text-red-500 inline text-sm">
                                            {actionData.fieldErrors.name}
                                        </span>)
                                        : <>&nbsp;</>
                                }
                            </div>
                            <div>
                                <label htmlFor="phone">Phone number</label>
                                <input
                                    ref={phoneRef}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="0712345678"
                                    className={`w-full rounded-lg block ${actionData?.fieldErrors.phone ? 'border-red-700' : ''}`}
                                />
                                {
                                    actionData?.fieldErrors.phone
                                        ? (<span className="pt-1 text-red-500 text-sm">
                                            {actionData.fieldErrors.phone}
                                        </span>)
                                        : <>&nbsp;</>
                                }
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="johndoe@gmail.com"
                                    className={`w-full rounded-lg block ${actionData?.fieldErrors.email ? 'border-red-700' : ''}`}
                                />
                                {
                                    actionData?.fieldErrors.email
                                        ? (<span className="pt-1 text-red-500 text-sm">
                                            {actionData.fieldErrors.email}
                                        </span>)
                                        : <>&nbsp;</>
                                }
                            </div>
                            <div>
                                <label htmlFor="capacity">Number of people</label>
                                <input
                                    ref={capacityRef}
                                    type="number"
                                    id="capacity"
                                    name="capacity"
                                    placeholder="2"
                                    className={`w-full text-black rounded-lg block ${actionData?.fieldErrors.capacity ? 'border-red-700' : ''}`}
                                />
                                {
                                    actionData?.fieldErrors.capacity
                                        ? (<span className="pt-1 text-red-500 text-sm">
                                            {actionData.fieldErrors.capacity}
                                        </span>)
                                        : <>&nbsp;</>
                                }
                            </div>
                            <button className="w-1/2 bg-a11y-2 px-6 py-2 rounded-lg text-a11y-1 focus:outline-none focus:ring-2 focus:ring-blue-600">
                                {transition.submission ? 'Reserving...' : 'Reserve'}
                            </button>
                        </fieldset>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export function ErrorBoundary() {
    const error = useRouteError();
    console.log({ error });

    if (isRouteErrorResponse(error)) {
        return (
            <div className="text-black">
                <h1 className="font-bold text-3xl">Error!</h1>
                <p>Status: {error.status}</p>
                <pre>
                    <code>{error.data.message}</code>
                </pre>
            </div>
        );
    }
    return (
        <div className="text-black">
            <h1 className="font-bold text-3xl">Error!</h1>
            <p>{error.message}</p>
        </div>
    );
}