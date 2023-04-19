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

export const hours = ['12 (Midnight)', '1 a.m.', '2 a.m.', '3 a.m.', '4 a.m.', '5 a.m.', '6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 (Noon)', '1 p.m', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.', '9 p.m.', '10 p.m.', '11 p.m.'];

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

export function trimPhone(phone) {
    return phone.replace(/\D+/g, '');
}

export function validatePhone(phone) {
    // if (typeof phone !== "string" || phone.length < 10) {
    //   return 'Phone number is invalid';
    // }
    const safariomRegex = /^(?:254|\+254|0)?([71](?:(?:0[0-8])|(?:[12][0-9])|(?:9[0-9])|(?:4[0-3])|(?:4[68]))[0-9]{6})$/;

    const airtelRegex = /^(?:254|\+254|0)?(7(?:(?:3[0-9])|(?:5[0-6])|(?:8[0-2])|(?:8[6-9]))[0-9]{6})$/;

    const telkomRegex = /^(?:254|\+254|0)?(77[0-9][0-9]{6})$/;

    if (typeof phone !== "string" || phone.length < 10) {
        return 'Phone number is invalid';
    }

    else if (!phone.match(safariomRegex) && !phone.match(airtelRegex) && !phone.match(telkomRegex)) {
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

export function validateDate(date) {
    if (!/^(\d{4})([\/-])(\d{1,2})\2(\d{1,2})$/.test(date)) {
        return 'Invalid date format';
    } else if (new Date(date).toLocaleDateString() < new Date().toLocaleDateString()) {
        // console.log(new Date(date).toISOString());
        return 'You cannot select a day in the past. Select any day from today';
    }

    // console.log('Date; ', new Date().toLocaleDateString());
    // console.log('Date from form: ', new Date(date).toLocaleDateString());
    // console.log('Date is in the past? ', new Date(date).toLocaleDateString() < new Date().toLocaleDateString());


    // // Parse date parts to integers
    const parts = date.split('-');
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[0], 10);

    // // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12) {
        return 'Invalid date. Check the month or year';
    }

    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
    }

    if (!(day > 0 && day <= monthLength[month - 1])) {
        return 'Invalid date. Check the day';
    }
}

export function validateTime(time) {
    if ((typeof time !== 'string') || (!hours.includes(time))) {
        return 'Invalid time';
    }
}

export function badRequest(data) {
    return json(data, { status: 404 });
}

export async function reserveTable(name, date, time, quantity, phone, specialEventDetails) {
    const Mailjet = require('node-mailjet');
    // TODO: Write instructions on how to get the Mailjet public and private keys
    // TODO: Write instructions on the email details (to, from, subject, body)

    const mailjet = Mailjet.apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

    let res = null;
    try {
        res = await mailjet
            .post('send', { version: 'v3.1' })
            .request({
                Messages: [
                    {
                        From: {
                            Email: "brayomwas95@gmail.com",
                            Name: "Restaurant"
                        },
                        To: [
                            {
                                Email: "thedevbrian@gmail.com",
                                Name: "Brian Mwangi"
                            }
                        ],
                        Subject: "Email from Restaurant contact form",
                        TextPart: "This is the text part",
                        HTMLPart: `<h3>Message from ${name}</h3>
                                               <p>Hi, I would like to book a table for ${quantity} on ${date} at ${time}</p>
                                               <p>Here is my contact: ${phone}</p>
                                               <p>${specialEventDetails ? `This is a special occasion (${specialEventDetails})` : ''}</p>
                                               
                                    
                                    `
                    }
                ]
            });
        console.log(request.body);
    } catch (error) {
        console.log(error);
    }
    return res.body;

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
