const queryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2022-10-20/data/query/production`;

export async function getWeeklyEvents() {
    // Name, description, image, time, day
    const weeklyEventsQuery = `*[_type == "weeklyEvent"]{_id,name, slug{current}, day, startTime, endTime, image{alt,image{asset->}},body[0]{children[0]{text}}}`;
    const weeklyEventsUrl = `${queryUrl}?query=${encodeURIComponent(weeklyEventsQuery)}`;
    const res = await fetch(weeklyEventsUrl);
    return res.json();
}

export async function getSpecialEvents() {

}

export async function getEvent(slug) {
    const eventQuery = `*[slug.current == "${slug}"]{_id,name, slug{current}, day, startTime, endTime, image{alt,image{asset->}},body[0]{children[0]{text}}}`;
    const eventUrl = `${queryUrl}?query=${encodeURIComponent(eventQuery)}`;
    const res = await fetch(eventUrl);
    return res.json();

}

export async function getEventImageAndName(id) {
    const eventImageQuery = `*[_id == "${id}"]{name,image{image{asset->}}}`;
    const eventImageUrl = `${queryUrl}?query=${encodeURIComponent(eventImageQuery)}`
    const res = await fetch(eventImageUrl);
    return res.json();
}
