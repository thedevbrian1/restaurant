import { json } from "@remix-run/node";
import { useEffect, useRef } from "react";

export const navLinks = [
    {
        name: 'Home',
        path: '/',
        id: 1,
    },
    {
        name: 'Menu',
        path: '/menu',
        id: 2,
    },
    {
        name: 'Events',
        path: '/events',
        id: 3,
    },
    {
        name: 'Hours & location',
        path: '/hours',
        id: 4,
    },
    {
        name: 'Contact',
        path: '/contact',
        id: 5
    }
];

export function validateEmail(email) {
    if (typeof email !== "string" || email.length < 3 || !email.includes("@")) {
        return 'Email is invalid';
    }
}

export function validateName(name) {
    if (typeof name !== "string" || name.length < 2) {
        return 'Name is invalid';
    }
}

export function validatePhone(phone) {
    // if (typeof phone !== "string" || phone.length < 10) {
    //   return 'Phone number is invalid';
    // }
    const safariomRegex = /^(?:254|\+254|0)?([71](?:(?:0[0-8])|(?:[12][0-9])|(?:9[0-9])|(?:4[0-3])|(?:4[68]))[0-9]{6})$/;

    const airtelRegex = /^(?:254|\+254|0)?(7(?:(?:3[0-9])|(?:5[0-6])|(?:8[0-2])|(?:8[6-9]))[0-9]{6})$/;

    const telkomRegex = /^(?:254|\+254|0)?(77[0-9][0-9]{6})$/;

    if (!phone.match(safariomRegex) && !phone.match(airtelRegex) && !phone.match(telkomRegex)) {
        return 'Phone number is invalid';
    }
}

export function validateCapacity(capacity) {
    if (capacity.length === 0 || Number(capacity) === 0) {
        return 'Cannot reserve for 0 people';
    }
}

export function validateMessage(message) {
    if (!message) {
        return 'Message cannot be empty';
    }
}
export function badRequest(data) {
    return json(data, { status: 404 });
}




// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
};
