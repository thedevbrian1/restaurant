import { ArrowRightIcon } from "~/components/Icon";
import { Form, Link } from "@remix-run/react";
import MenuCard from "~/components/MenuCard";
import Special from "~/components/Special";
import TestimonialCard from "~/components/TestimonialCard";

export default function Index() {
  return (
    <main>
      {/* Hero section */}
      <Hero />
      {/* Specials section */}
      <Specials />
      {/* Menus section */}
      <Menus />
      {/* Testimonials section */}
      <Testimonials />
      {/* Form */}
      <ContactForm />
      {/* Footer */}
      <Gallery />
    </main>
  );
}

function Hero() {
  return (
    <section className="w-full h-screen  bg-[url('/hero.jpg')] bg-center bg-no-repeat ">
      <div className="w-full h-full grid place-items-center  bg-gradient-to-b from-a11y-1 via-[#5c0244]">
        <div className="grid gap-3 lg:gap-6 place-items-center px-5">
          <h1 className="text-3xl lg:text-6xl font-semibold font-heading">
            Experience Heaven in your Mouth
          </h1>
          <p className="text-lg lg:text-2xl font-text">
            The best of Nairobian drinks and meals in one spot
          </p>
          <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto px-4 lg:px-auto">
            <Link to="/" className="px-6 py-2 w-full lg:w-auto text-center bg-white text-black rounded-lg">
              Make Reservation
            </Link>
            <Link to="/" className="px-6 py-2 w-full lg:w-auto text-center border border-white rounded-lg">
              Order Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specials() {
  const specials = [
    {
      title: 'Date Night',
      day: 'Tuesdays',
      time: '7pm till late',
    },
    {
      title: 'Karaoke Night',
      day: 'Wednesdays',
      time: '7-11pm',
    },
    {
      title: 'Afrobeats Night',
      day: 'Thursdays',
      time: '7pm till late',
    },
    {
      title: 'Deejay Showdown',
      day: 'Fridays',
      time: '7pm till late',
    }
  ];
  return (
    <section className="bg-light-gray w-full text-black py-16 lg:py-20">
      <div className="w-4/5 mx-auto grid lg:grid-cols-2 gap-5 lg:gap-14">
        <div className="order-2 lg:order-none">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="/man-serving-burger.jpg"
              alt=""
              width="100%"
              height="100%"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 self-center order-1 lg:order-none">
          <h2 className="font-semibold text-2xl lg:text-4xl font-heading">Enjoy our weekly specials</h2>
          <p className="text-a11y-1 text-xl lg:text-2xl">Awesome experiences at Restaurant KE</p>
          <p className="text-light-black">Don't get left out of the hottest vibes in Nairobi's hypest spot.</p>
          <div className="grid lg:grid-cols-2 gap-2 mt-3">
            {/* Grid with icons */}
            {
              specials.map((item, index) => (
                <Special special={item} key={index} index={index} />
              ))
            }
          </div>
          <Link to="/events" className="text-a11y-1 underline hover:text-a11y-2">
            View our events calendar <ArrowRightIcon className="ml-1 w-5 h-5 inline" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Menus() {
  const menus = [
    {
      title: 'Lunch',
      imageUrl: '/burger.jpg',
      id: 1,
    },
    {
      title: 'Dinner',
      imageUrl: '/dinner.jpg',
      id: 2,
    },
    {
      title: 'Cocktails',
      imageUrl: '/cocktails.jpg',
      id: 3,
    },
    {
      title: 'Beer/Wines',
      imageUrl: '/beer.jpg',
      id: 4,
    }
  ];
  return (
    <section className="relative bg-a11y-1 text-a11y-2 fill-light-gray">
      <div className="w-4/5 lg:max-w-6xl mx-auto pt-48 lg:pt-52">
        <div className="grid gap-5">
          <h2 className="font-semibold text-2xl lg:text-5xl text-center font-heading">Our Menus</h2>
          <p className="text-center">The best specialties from Africa, Asia, Europe and beyond.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              menus.map((menu, index) => (
                <MenuCard bgImageUrl={menu.imageUrl} title={menu.title} key={menu.id} />
              ))
            }
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-32 py-10">
            <div className="flex flex-col gap-3">
              <p className="font-bold  text-xl lg:text-2xl font-heading">You can now order online from Restaurant</p>
              <p>We now actively deliver meals to your doorstep on <span className="font-bold">Uber Eats</span> and <span className="font-bold">Glovo</span></p>
              <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-3">
                <Link to="/" className="py-2 px-6 w-2/3 lg:w-auto text-center rounded-lg bg-white text-black">
                  Order on Glovo
                </Link>
                <Link to="/" className="py-2 px-6 w-2/3 lg:w-auto text-center rounded-lg border border-white text-white">
                  Order on Uber Eats
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="aspect-w-4 aspect-h-3 lg:aspect-h-1 lg:aspect-w-1 w-60 lg:w-72">
                <img
                  src="/order.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full leading-[0] overflow-hidden">
        <svg className="relative block h-[150px] w-[calc(101% + 1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="fill-light-gray"></path>
        </svg>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-a11y-1 text-a11y-2">
      <div className="w-4/5 lg:max-w-6xl mx-auto py-16 lg:py-20 grid gap-5">
        <h2 className="font-semibold text-2xl lg:text-5xl text-center font-heading">What Customers Say</h2>
        <p className="text-center ">
          Over 1000 reviews on Google, Yelp and Facebook
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const hours = ['12 (Midnight)', '1 a.m.', '2 a.m.', '3 a.m.', '4 a.m.', '5 a.m.', '6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 (Noon)', '1 p.m', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.', '9 p.m.', '10 p.m.', '11 p.m.'];

  // TODO: Collect more details for reservation e.g whether it is a special occasion
  // Use a checkbox to activate the more details section
  // Special occasions include birthdays, graduation party, valentine's
  return (
    <section className="w-4/5 lg:max-w-6xl mx-auto py-16 lg:py-20 grid gap-5 justify-items-center">
      <h2 className="font-semibold text-2xl lg:text-5xl text-black font-heading">Your next meal awaits @ Restaurant KE</h2>
      <p className="font-bold text-a11y-1 text-xl lg:text-2xl">123 Street, Nairobi</p>
      <Form method="post" className="w-full lg:w-auto">
        <fieldset className="text-black px-4 lg:px-10 flex flex-col lg:flex-row gap-3 lg:items-end">
          <div>
            <label htmlFor="date">Day</label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full lg:w-auto border border-gray-300 text-light-black rounded-lg block shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <select
              name="time"
              id="time"
              className="w-full lg:w-auto border border-gray-300 text-light-black  rounded-lg block shadow-sm"
              defaultValue={hours[12]}
            >
              {hours.map((hour, index) => (
                <option
                  value={hour}
                  key={index}
                // selected={hour === '12 (Noon)'}
                >
                  {hour}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quantity">Number of people</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="e.g 2"
              className="w-full lg:w-auto border border-gray-300 text-light-black rounded-lg block shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="e.g 0712345678"
              className="w-full lg:w-auto border border-gray-300 text-light-black rounded-lg block shadow-sm"
            />
          </div>
          <button type="submit" className="w-full lg:w-auto bg-a11y-1 text-a11y-2 lg:h-11 py-2 px-6 rounded-lg">
            Reserve a Table
          </button>
        </fieldset>
      </Form>
    </section>
  )
}

function Gallery() {
  return (
    <div className="">
      <div className="columns-2 lg:columns-3 gap-1 lg:gap-x-2 w-4/5 lg:max-w-4xl mx-auto">
        <div className="break-inside-avoid p-0.5 mb-1 lg:p-2 lg:mb-2 ">
          <img
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
        <div className="break-inside-avoid p-0.5 mb-1 lg:p-2 lg:mb-2">
          <img
            src="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
        <div className="break-inside-avoid p-0.5 mb-1 lg:p-2 lg:mb-2">
          <img
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
        <div className="break-inside-avoid p-0.5 mb-1 lg:p-2 lg:mb-2">
          <img
            src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
        <div className="break-inside-avoid p-1 mb-1 lg:p-2 lg:mb-2">
          <img
            src="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-[#f46b45] to-[#eea849] text-black w-full p-3 flex justify-between lg:px-10 py-6">
        <div>
          <span className="font-bold lg:text-lg font-heading">Restaurant KE</span>
          <span className="ml-2 ">123 Street, Nairobi</span>
        </div>
        <ul className="hidden lg:flex gap-3">
          <li>
            <Link to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/events">
              Events
            </Link>
          </li>
          <li>
            <Link to="/hours">
              Hours and Location
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  )
}