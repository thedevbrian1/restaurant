import { Form, isRouteErrorResponse, useActionData, useRouteError, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { badRequest, validateEmail, validateMessage, validateName, validatePhone } from "~/utils";

export async function action({ request }) {
    const formData = await request.formData();
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');

    // const fields = { name, phone, email, message };
    const fieldErrors = {
        name: validateName(name),
        phone: validatePhone(phone),
        email: validateEmail(email),
        message: validateMessage(message)
    };

    if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({ fieldErrors });
    }

    return null;
}

export default function Contact() {
    const actionData = useActionData();
    const transition = useTransition();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        if (actionData?.fieldErrors.name) {
            nameRef.current?.focus();
        } else if (actionData?.fieldErrors.email) {
            emailRef.current?.focus();
        } else if (actionData?.fieldErrors.phone) {
            phoneRef.current?.focus();
        } else if (actionData?.fieldErrors.message) {
            messageRef.current?.focus();
        }
    }, [actionData]);

    return (
        <main className="grid text-a11y-2 bg-a11y-1">
            <section className="w-full h-[25vh] grid place-items-center">
                <h1 className="font-bold font-heading text-4xl">
                    Contact
                </h1>
            </section>
            <section className="py-5 lg:py-10 space-y-3">
                <h2 className="font-semibold text-lg lg:text-2xl text-center font-heading">We'd like to hear from you</h2>
                <div className="grid lg:grid-cols-2 gap-4 w-4/5 lg:max-w-4xl mx-auto">
                    <div className="space-y-3">
                        <div className="bg-orange-100 w-full h-56 grid place-items-center rounded-lg">
                            <div className="w-20 h-20">
                                <img
                                    src="/phone.svg"
                                    alt="A handcraft illustration of an old mobile phone with a numeric keypad"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <p className="text-center">0710 162 152</p>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-green-100 w-full h-56 grid place-items-center rounded-lg">
                            <div className="w-20 h-20">
                                <img
                                    src="/envelope.svg"
                                    alt="A handcraft illustration of an envelope"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <p className="text-center">hello@restaurantke.co.ke</p>
                    </div>
                </div>
            </section>
            <section className="py-5 lg:py-10 space-y-3 w-4/5 lg:max-w-4xl mx-auto">
                <h2 className="font-semibold text-lg lg:text-2xl text-center font-heading">Send us a quick message</h2>
                <Form method="post" replace className="lg:w-4/5 mx-auto">
                    <fieldset className="text-light-gray grid lg:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                ref={nameRef}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="John Doe"
                                className={`w-full bg-transparent border border-white rounded-lg block focus:border-none focus:ring-2 focus:ring-a11y-2 ${actionData?.fieldErrors.name ? 'border-red-700' : ''}`}
                            />
                            {
                                actionData?.fieldErrors.name
                                    ? (<span className="pt-1 text-red-700 inline text-sm">
                                        {actionData.fieldErrors.name}
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
                                className={`w-full bg-transparent border border-white rounded-lg block ${actionData?.fieldErrors.email ? 'border-red-700' : ''}`}
                            />
                            {
                                actionData?.fieldErrors.email
                                    ? (<span className="pt-1 text-red-700 text-sm">
                                        {actionData.fieldErrors.email}
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
                                className={`w-full bg-transparent border border-white rounded-lg block ${actionData?.fieldErrors.phone ? 'border-red-700' : ''}`}
                            />
                            {
                                actionData?.fieldErrors.phone
                                    ? (<span className="pt-1 text-red-700 text-sm">
                                        {actionData.fieldErrors.phone}
                                    </span>)
                                    : <>&nbsp;</>
                            }
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                ref={messageRef}
                                id="message"
                                name="message"
                                placeholder="Enter message"
                                className={`w-full bg-transparent border border-white rounded-lg block ${actionData?.fieldErrors.message ? 'border-red-700' : ''}`}
                            />
                            {
                                actionData?.fieldErrors.message
                                    ? (<span className="pt-1 text-red-700 text-sm">
                                        {actionData.fieldErrors.message}
                                    </span>)
                                    : <>&nbsp;</>
                            }
                        </div>
                        <button className="w-1/2 bg-white px-6 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600">
                            {transition.submission ? 'Submitting...' : 'Submit'}
                        </button>
                    </fieldset>
                </Form>
            </section>
        </main>
    );
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